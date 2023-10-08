<template>
  <el-button @click="handleCurrentChange(1)">查電影</el-button>
  <el-table :data="movieArray" style="width: 100%">
    <el-table-column type="selection" width="55" />
    <el-table-column type="index" width="50" />
    <el-table-column prop="original_title" label="title" width="180" />
    <el-table-column prop="popularity" label="popularity" width="180" />
    <el-table-column prop="release_date" label="release_date" width="180" />
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

<script setup>
import { ref, reactive } from "vue";
import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const isLoading = ref(false);
const movieArray = ref([]);
const currentPage = ref(1);
const pageCount = ref(0);

const filterMovies = async (page) => {
  isLoading.value = true;
  // console.log({ page, year, genreId });
  console.log(import.meta.env);
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

const handleCurrentChange = async (val) => {
  currentPage.value = val;
  try {
    const { data } = await filterMovies(val);
    console.log("data", data);
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
</script>
