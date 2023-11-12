<template>
  <div class="container">
    <div class="box">
      <p
        :class="[
          isEven ? 'textRed' : 'textBlue',
          isThreeTimes ? 'bgcGreen' : 'bgcGray',
        ]"
      >
        {{ count }} {{ countNoRef }}
      </p>
      <button @click="startCount">start</button>
    </div>
    <div class="box">
      <p id="counter"></p>
      <button @click="startCountWithJS" class="start">start</button>
    </div>
  </div>
</template>

<script setup>
// vue
import { ref, computed } from "vue";

const count = ref(1);
let countNoRef = 1;
const isEven = computed(() => count.value % 2 === 0);
const isThreeTimes = computed(() => count.value % 3 === 0);

const startCount = () => {
  count.value = 12;
  countNoRef = 12;

  // for (let i = 1; i < 10; i++) {
  //   setTimeout(() => {
  //     count.value++;
  //     countNoRef++;
  //   }, 1000 * i);
  // }
};

// 原生 JS
let num = 1;
const startCountWithJS = () => {
  const counter = document.querySelector("#counter");
  num = 1;
  for (let i = 1; i < 10; i++) {
    setTimeout(() => {
      num++;
      counter.innerText = num;
      if (num % 2 === 0) {
        counter.classList.add("textRed");
        counter.classList.remove("textBlue");
      } else {
        counter.classList.add("textBlue");
        counter.classList.remove("textRed");
      }
    }, 1000 * i);
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
}
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
