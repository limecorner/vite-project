<template>
  <div>
    <p>
      The window width and height are respectively {{ widthNoRef }},
      {{ width }},
      {{ height }}
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
let widthNoRef = document.documentElement.clientWidth;
const width = ref(document.documentElement.clientWidth);
const height = ref(document.documentElement.clientHeight);
const handleResize = () => {
  console.log("窗口大小已更改");
  widthNoRef = document.documentElement.clientWidth;
  width.value = document.documentElement.clientWidth;
  height.value = document.documentElement.clientHeight;
};
onMounted(() => {
  window.addEventListener("resize", handleResize);
});
</script>
