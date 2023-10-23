<template>
  <div class="box">
    <p
      :class="[
        isEven ? 'textRed' : 'textBlue',
        isThreeTimes ? 'bgcGreen' : 'bgcGray',
      ]"
    >
      {{ count }}
    </p>
    <button @click="startCount">start</button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const count = ref(1);
const isEven = computed(() => count.value % 2 === 0);
const isThreeTimes = computed(() => count.value % 3 === 0);

const startCount = () => {
  count.value = 1;
  for (let i = 1; i < 10; i++) {
    setTimeout(() => {
      count.value++;
    }, 1000 * i);
  }
};
</script>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  align-items: center;
}

p {
  width: 150px;
  height: 150px;
  font-size: 30px;
  background-color: gray;
}

.textRed {
  color: red;
}
.textBlue {
  color: blue;
}
.bgcGreen {
  background-color: green;
}
.bgcGray {
  background-color: gray;
}
</style>
