<template></template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  // 輸入 k，印出前 k 個質數
  const printPrime = (k) => {
    let i = 2;
    while (k > 0) {
      if (isPrime(i)) {
        console.log(i);
        k--;
      }
      i++;
    }
  };

  // 輸入 k，印出前 k 個質數
  // const printPrime = (k) => {
  //   for (let i = 2; k > 0; i++) {
  //     if (isPrime(i)) {
  //       console.log(i);
  //       k--;
  //     }
  //   }
  // };

  // 判斷此數是否為質數
  const isPrime = (n) => {
    if (n === 1) return false;
    if (n === 2) return true;

    for (let i = 2; i < n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  console.log(isPrime(83));
  printPrime(1);

  // 印出沙漏
  const logStar = (n) => {
    const middle = (n + 1) / 2;
    let starNumber = n;
    let blankNumber = 0;
    let str = "";
    const star = "*";
    const blank = " ";

    for (let i = 1; i <= n; i++) {
      str = "";
      if (i === 1) {
      } else if (i <= middle) {
        starNumber -= 2;
        blankNumber++;
      } else {
        starNumber += 2;
        blankNumber--;
      }
      str += blank.repeat(blankNumber);
      str += star.repeat(starNumber);

      console.log(str);
    }
  };
  logStar(1);

  // 費氏數列
  const fab = (n) => {
    if (n === 1 || n === 2) return 1;
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      console.log("i", i);
      // if (i % 2 === 1) {
      //   a = a + b;
      // } else {
      //   b = a + b;
      // }
      i % 2 === 1 ? (a = a + b) : (b = a + b);
    }
    if (n % 2 === 1) {
      return a;
    } else {
      return b;
    }
  };
  console.log(fab(5));
});
</script>
