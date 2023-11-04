<template></template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const cookFoodPromise = (name, time) => {
    return new Promise((resolve, reject) => {
      if (time > 3 && time < 5) {
        resolve(`${name} 成功`);
      } else {
        reject(`${name} 失敗`);
      }
    });
  };
  // console.log(cookFoodPromise("泡菜", 2));
  // console.log(cookFoodPromise("泡菜", 4));

  cookFoodPromise("泡菜", 4)
    .then((res) => {
      console.log(res);
      return `${res} 讚讚讚`;
    })
    .then((res) => {
      console.log(res);
      return `${res} 棒棒棒`;
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  // const cook = async () => {
  //   try {
  //     const response = await cookFoodPromise("泡菜", 2);
  //     console.log("response", response);
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };
  // cook();
});
</script>
