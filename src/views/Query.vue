<template>
  <div>
    <h3>route</h3>
    <p>route.query: {{ route.query }}</p>
    <p>
      router.currentRoute.value.query: {{ router.currentRoute.value.query }}
    </p>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
console.log("route", route);
console.log("router", router);
</script>
