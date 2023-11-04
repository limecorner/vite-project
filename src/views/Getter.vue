<template></template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  // getter, setter
  const student = {
    score: 80,
    get getScore() {
      return this.score;
    },
    set changeScore(newScore) {
      console.log("set觸發");
      if (newScore < 60) {
        this.score = "gogo";
      } else {
        this.score = newScore;
      }
    },
  };
  student.changeScore = 60;
  console.log(student.getScore);
  student.changeScore = 40;
  console.log(student.getScore);
  // const user = {
  //   name: "Black",
  //   surname: "Chang",
  //   get getName() {
  //     console.log("get 觸發");
  //     return `${this.name} ${this.surname}`;
  //   },
  //   set changeName(newName) {
  //     console.log("set 觸發");
  //     [this.name, this.surname] = newName.split(" ");
  //   },
  // };
  // console.log(user.getName);
  // // setter 不能這樣用
  // // user.changeName("White");
  // user.changeName = "White Li";
  // console.log(user.getName);
  //   let user = {
  //     get name() {
  //       return this._name;
  //     },
  //     set name(value) {
  //       if (value.length < 4) {
  //         console.log("Name is too short, need at least 4 characters");
  //         return;
  //       }
  //       this._name = value;
  //     },
  //   };
  //   user.name = "Pete";
  //   console.log(user.name); // Pete
  //   user.name = "kk"; // Name 太短了……
  //   console.log(user.name); // Pete
  // });
  // let user = {
  //   get score() {
  //     return this._score;
  //   },
  //   set score(value) {
  //     if (value < 60) {
  //       console.log("red");
  //       this._score = "加油，好嗎";
  //     } else {
  //       this._score = value;
  //     }
  //   },
  // };
  // user.score = 80;
  // console.log(user.score);
  // user.score = 30;
  // console.log(user.score);
});
</script>
