<template>
  <div>
    <el-select v-model="currentLanguage" class="m-2" placeholder="Select">
      <!-- @change="changeLanguage($event)" -->
      <el-option
        v-for="item in languageOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import i18n from "./../language/index";

// i18n
const languageOptions = [
  {
    value: "tw",
    label: "繁體中文",
  },
  {
    value: "en",
    label: "English",
  },
  {
    value: "cn",
    label: "简体中文",
  },
];
const currentLanguage = ref(localStorage.getItem("language") || "tw");
watch(currentLanguage, (newVal) => {
  localStorage.setItem("language", newVal);
  currentLanguage.value = newVal;
  i18n.global.locale.value = newVal;
  // console.log(i18n);
  // console.log(i18n.global.locale);
});
</script>
