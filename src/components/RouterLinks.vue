<template>
  <div>
    <router-link
      v-for="{ to, heading } in routerArray"
      :to="to"
      class="mr-10px"
      >{{ heading }}</router-link
    >
  </div>
</template>

<script setup>
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
  {
    to: "props",
    heading: "Props",
  },
  {
    to: "dynamicComponents",
    heading: "Dynamic Components",
  },
  {
    to: "nextTick",
    heading: "nextTick",
  },
  {
    to: "import",
    heading: "import",
  },
  {
    to: "changeColor",
    heading: "changeColor",
  },
  {
    to: "user",
    heading: "user",
  },
  {
    to: "query",
    heading: "query",
  },
];
</script>

<style scoped>
.mr-10px {
  margin-right: 10px;
}
</style>
