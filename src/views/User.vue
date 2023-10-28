<template>
  <div>
    <h3>route</h3>
    <p>route.params: {{ route.params }}</p>
    <p>
      router.currentRoute.value.params: {{ router.currentRoute.value.params }}
    </p>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
console.log("route", route);
console.log("router", router);
</script>
