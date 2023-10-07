<template>
  <ComplexCard></ComplexCard>
  <ComplexCard class="text-plum">
    <template v-slot:name>James Lian</template>
    <template v-slot:interest>Read</template>
    <template v-slot:jobTitle>Cloud</template>
  </ComplexCard>
  <ComplexCard class="purple">
    <template v-slot:name>Wade Lee</template>
    <template v-slot:interest>Game</template>
    <template v-slot:jobTitle>Android</template>
  </ComplexCard>
</template>

<script setup>
import ComplexCard from './../components/ComplexCard.vue'


</script>
<style scoped>
.text-plum{
  color: plum;
  border: dashed 2px tomato;
  font-weight: 900;
}
.purple{
  color: purple;
  border: dashed 2px purple;
  font-weight: 900;
}
</style>