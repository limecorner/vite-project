<template>
  <LanguageOptions />
  <RouterLinks />

  <HelloWorld msg="Vite + Vue" />
  <router-view></router-view>
</template>

<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import LanguageOptions from "./components/LanguageOptions.vue";
import RouterLinks from "./components/RouterLinks.vue";
</script>

<style scoped></style>
