<template>
  <el-button @click="handleCurrentChange(1)">{{ t("searchMovies") }}</el-button>
  <el-button @click="logFinalCheckedMovies">目前勾選的電影</el-button>
  <el-button
    @click="exportDataToExcel"
    :disabled="finalCheckedMovies.length === 0"
    >匯出勾選的電影</el-button
  >

  <el-table
    :data="movieArray"
    style="width: 100%"
    ref="tableRef"
    @select="handleSelect"
    @select-all="handleSelectAll"
  >
    <el-table-column type="selection" width="55" />
    <el-table-column type="index" width="50" />
    <el-table-column prop="original_title" :label="t('title')" />
    <el-table-column prop="popularity" :label="t('popularity')" />
    <el-table-column prop="release_date" :label="t('releaseDate')" />
  </el-table>
  <el-pagination
    @current-change="handleCurrentChange"
    background
    layout="prev, pager, next, ->"
    :pager-count="11"
    :current-page="currentPage"
    :page-count="pageCount"
  >
  </el-pagination>
</template>

<script lang="ts" setup>
import { ref, nextTick, watch } from "vue";
import axios from "axios";
import { ElTable } from "element-plus";
import { utils, writeFile } from "xlsx";
import { useI18n } from "vue-i18n";

const BASE_URL = "https://api.themoviedb.org/3/";
const isLoading = ref(false);
const movieArray = ref<any[]>([]);
const currentPage = ref(1);
const pageCount = ref(0);
const { t } = useI18n();

// 查詢電影
const filterMovies = async (page) => {
  isLoading.value = true;
  // console.log({ page, year, genreId });
  // console.log(import.meta.env);
  return axios.get(`${BASE_URL}discover/movie`, {
    params: {
      api_key: import.meta.env.VITE_APP_apiKey,
      sort_by: "popularity.desc",
      include_video: false,
      page,
      // primary_release_year: year,
      // with_genres: genreId,
    },
  });
};

// 點分頁
const handleCurrentChange = async (val) => {
  currentPage.value = val;
  try {
    const { data } = await filterMovies(val);
    // console.log("data", data);
    movieArray.value = data.results;
    pageCount.value = data.total_pages;
    isLoading.value = false;
  } catch (error) {
    console.log("error", error);
    currentPage.value = 1;
    movieArray.value = [];
    isLoading.value = false;
  }
};

// 此陣列紀錄一共勾選了哪些電影
const finalCheckedMovies = ref<any[]>([]);
const handleSelect = (selectedRows, selectedRow) => {
  // 勾選時，finalCheckedMovies 加入此電影

  // 此選項是否已經勾選
  finalCheckedMovies.value?.find(({ id }) => id === selectedRow.id)
    ? // 此選項已經勾選: 取消勾選時，finalCheckedMovies 移掉此電影
      (finalCheckedMovies.value = finalCheckedMovies.value?.filter(
        ({ id }) => id !== selectedRow.id
      ))
    : // 此選項尚未勾選: 勾選時，finalCheckedMovies 加入此電影
      finalCheckedMovies.value?.push(selectedRow);
};
const handleSelectAll = (selectedRows) => {
  // selectedRows 為按下全選鈕後，是全選/全取消

  // 全取消
  if (selectedRows.length === 0) {
    // finalCheckedMovies 移走畫面上這些電影
    finalCheckedMovies.value = finalCheckedMovies.value?.filter(
      (finalCheckedMovie) =>
        !movieArray.value?.find(({ id }) => id === finalCheckedMovie.id)
    );
    return;
  }

  // 全選
  selectedRows.forEach((row) => {
    // 若已勾選，則不做事
    if (finalCheckedMovies.value?.find(({ id }) => id === row.id)) return;
    // 若尚未勾選，則 finalCheckedMovies 加入此電影
    finalCheckedMovies.value?.push(row);
  });
};

// 換頁時，已被勾選的電影(已在 finalCheckedMovies 的電影)，會預先打勾
const tableRef = ref<InstanceType<typeof ElTable>>();
const restoreCheckedMovies = () => {
  movieArray.value.forEach((movie) => {
    tableRef.value?.toggleRowSelection(
      movie,
      !!finalCheckedMovies.value?.some(({ id }) => id === movie.id)
    );
  });
};
watch(movieArray, async (newVal) => {
  await nextTick();
  restoreCheckedMovies();
});

const logFinalCheckedMovies = () => {
  finalCheckedMovies.value.forEach(({ original_title }) => {
    console.log(original_title);
  });
};

// 將勾選到的電影，匯出成 excel 檔
const exportDataToExcel = async () => {
  // 展示的順序
  const header = [
    "original_title", // index: 0
    "popularity",
    "release_date", // index: 2
  ];
  // 展示的名稱
  const headerDisplay = {
    original_title: t("title"),
    popularity: t("popularity"),
    release_date: t("releaseDate"),
  };

  let dataWithNewHeader: any[] = [];
  dataWithNewHeader = [headerDisplay, ...finalCheckedMovies.value];

  // 創建工作表
  const ws = utils.json_to_sheet(dataWithNewHeader, {
    header: header,
    skipHeader: true, // 忽略原來的表頭
  });

  // 隱藏不展示的欄位
  const startIndex = Object.keys(headerDisplay).length;
  console.log('header',header)
  const totalProperties = header.length;
  ws["!cols"] = [];
  for (let index = startIndex; index < totalProperties; index++) {
    ws["!cols"][index] = { hidden: true };
  }

  // 創建工作簿
  const wb = utils.book_new();
  // 將工作表放入工作簿中
  utils.book_append_sheet(wb, ws, "data");
  // 生成文件並下载
  writeFile(wb, "匯出的電影.xlsx");

  finalCheckedMovies.value = [];
  tableRef.value?.clearSelection();
};
</script>
