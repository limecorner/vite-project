<template>
  <Card></Card>
  <!-- 子元件預留空間(槽)，讓父元件插入內容 -->
  <Card class="text-red">父元件寫入的字</Card>
  <ComplexCard class="blue">
    <template v-slot:name>Alan Liu</template>
    <template v-slot:interest>Run</template>
    <template v-slot:jobTitle>Data</template>
  </ComplexCard>
</template>

<script setup>
import Card from "./../components/Card.vue";
import ComplexCard from "./../components/ComplexCard.vue";
</script>
<style scoped>
.text-red {
  color: red;
  border: dashed 2px tomato;
  font-weight: 900;
}
.blue {
  color: blue;
  border: dashed 2px blue;
  font-weight: 900;
}
</style>
