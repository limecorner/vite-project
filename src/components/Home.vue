<template>
  <div class="tab">
    <p>Home component</p>

    <span>Message is: {{ msg }}</span>
    <input v-model="msg" />
  </div>
</template>
<!-- <script>
export default {
  name: "Home",
};
</script> -->

<script setup>
import { ref } from "vue";
const msg = ref("");
</script>
