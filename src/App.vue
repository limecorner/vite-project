<template>
  <LanguageOptions />
  <div>
    <router-link
      v-for="{ to, heading } in routerArray"
      :to="to"
      class="mr-10px"
      >{{ heading }}</router-link
    >
  </div>
  <HelloWorld msg="Vite + Vue" />
  <router-view></router-view>
</template>

<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import LanguageOptions from "./components/LanguageOptions.vue";

const routerArray = [
  {
    to: "/",
    heading: "Main",
  },
  {
    to: "elTable",
    heading: "elTable",
  },
  {
    to: "slot",
    heading: "Slot",
  },
  {
    to: "named-slots",
    heading: "Named Slots",
  },
  {
    to: "defineProperty",
    heading: "defineProperty",
  },
  {
    to: "reactivity",
    heading: "Reactivity",
  },
];
</script>

<style scoped>
.mr-10px {
  margin-right: 10px;
}
</style>
