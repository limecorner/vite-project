<template></template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  // 26. Remove Duplicates from Sorted Array
  const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  // const nums = [1, 1, 2];

  // const removeDuplicates = (array) => {
  //   const arr = [];
  //   array.forEach((e) => {
  //     if (!arr.includes(e)) {
  //       arr.push(e);
  //     }
  //   });
  //   array = arr;
  //   return array;
  // };

  const removeDuplicates = function (nums) {
    const n = nums.length;
    if (n === 1) return n;
    let left = 0;
    let right = 1;
    while (right < n) {
      if (nums[right] === nums[left]) {
        right++;
      } else {
        left++;
        nums[left] = nums[right];
        right++;
      }
    }
    return nums;
  };

  console.log(removeDuplicates(nums));
});
</script>
