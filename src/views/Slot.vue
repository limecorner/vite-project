<template>
  <Card></Card>
  <Card class="text-red">父元件寫入的字</Card>
</template>

<script setup>
import Card from './../components/Card.vue'


</script>
<style scoped>
.text-red{
  color: red;
  border: dashed 2px tomato;
  font-weight: 900;
}
</style>