<template>
  <div class="tab">
    <p>Posts component</p>

    <span>count: {{ count }}</span>
    <button @click="count++">+</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const count = ref(0);
</script>
