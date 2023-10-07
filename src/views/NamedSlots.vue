<template>
  <ComplexCard></ComplexCard>
  <!-- 當父元件插入多個內容時，子元件該如何對應插入內容和預留空間呢? -->
  <ComplexCard class="text-plum">
    <template v-slot:name>James Lian</template>
    <!-- 先選定好 slot (名稱為 interest 的 slot)，再插入內容-->
    <template v-slot:interest>Read</template>
    <template v-slot:jobTitle>Cloud</template>
  </ComplexCard>
  <ComplexCard class="purple">
    <template v-slot:name>{{ wade.name }}</template>
    <template v-slot:interest>{{ wade.interest }}</template>
    <template v-slot:jobTitle>{{ wade.jobTitle }}</template>
  </ComplexCard>
</template>

<script setup>
import { reactive } from "vue";
import ComplexCard from "./../components/ComplexCard.vue";
const wade = reactive({
  name: "Wade Lee",
  interest: "Game",
  jobTitle: "Android",
});
</script>
<style scoped>
.text-plum {
  color: plum;
  border: dashed 2px tomato;
  font-weight: 900;
}
.purple {
  color: purple;
  border: dashed 2px purple;
  font-weight: 900;
}
</style>
