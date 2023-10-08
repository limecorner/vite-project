<template><h3>DefineProperty</h3></template>

<script setup>
// import { ref, reactive } from "vue";
let num = 18;
const user = {
  name: "James",
  sex: "男",
  // age: 25,
};

Object.defineProperty(user, "age", {
  // value: 25,
  // enumerable: true,
  // writable: true,
  // configurable: true,

  get() {
    console.log("有人讀取user的age 屬性時，getter就會被調用");
    return num;
  },

  set(newAge) {
    console.log("有人修改user的age 屬性時，setter就會被調用");
    num = newAge;
  },
});
num = 28;
user.age = 50;
// user.age = 18;
// delete user.name;
// delete user.age;
console.log("user", user);

// console.log("把傳入物件的所有屬姓名，提取出來，變成一個[]", Object.keys(user));
// for (let key in user) {
//   console.log("value", user[key]);
// }
</script>
