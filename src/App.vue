<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <router-link class="m-5" to="/">Main </router-link>
    <router-link to="/demoElTable">DemoElTable</router-link>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <router-view></router-view>
</template>

<style scoped>

</style>
