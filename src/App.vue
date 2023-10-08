<script setup>
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div>
    <router-link to="/" class="mr-10px">Main</router-link>
    <router-link to="/demoElTable" class="mr-10px">DemoElTable</router-link>
    <router-link to="/slot" class="mr-10px">Slot</router-link>
    <router-link to="/named-slots" class="mr-10px">Named Slots</router-link>
    <router-link to="/defineProperty" class="mr-10px"
      >DefineProperty</router-link
    >
  </div>
  <HelloWorld msg="Vite + Vue" />
  <router-view></router-view>
</template>

<style scoped>
.mr-10px {
  margin-right: 10px;
}
</style>
