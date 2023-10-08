<template>
  <el-button @click="filterMovies">查電影</el-button>
  <el-table :data="movieArray" style="width: 100%">
    <el-table-column type="selection" width="55" />
    <el-table-column type="index" width="50" />
    <el-table-column prop="original_title" label="title" width="180" />
    <el-table-column prop="popularity" label="popularity" width="180" />
    <el-table-column prop="release_date" label="release_date" width="180" />
  </el-table>
</template>

<script setup>
import { ref, reactive } from "vue";
import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const isLoading = ref(false);
let movieArray = ref([]);
const filterMovies = (page, year, genreId) => {
  isLoading.value = true;
  console.log({ page, year, genreId });
  console.log(import.meta.env);
  axios
    .get(`${BASE_URL}discover/movie`, {
      params: {
        api_key: import.meta.env.VITE_APP_apiKey,
        sort_by: "popularity.desc",
        include_video: false,
        // page,
        // primary_release_year: year,
        // with_genres: genreId,
      },
    })
    .then((response) => {
      const { data } = response;
      console.log(data.results);
      movieArray.value = data.results;
      isLoading.value = false;
    })
    .catch((error) => {
      isLoading.value = false;
      console.log(error);
    });
};
</script>
