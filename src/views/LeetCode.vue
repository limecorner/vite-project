<template></template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const nums = [1, 3, 5, 6];
  const target = 5;

  var searchInsert = function (nums, target) {
    if (target < nums[0]) return 0;
    if (nums[nums.length - 1] < target) return nums.length;

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === target) return i;
      if (nums[i] < target && target < nums[i + 1]) return i + 1;
    }
  };
  console.log(searchInsert(nums, 2));
  console.log(searchInsert(nums, 4));
  console.log(searchInsert(nums, 5));
  console.log(searchInsert(nums, 8));

  // const obj = {};
  // obj.a = 1;
  // obj[4] = 2;
  // console.log("obj", obj);
  // console.log("obj[4]", obj[4]);

  // const object = singleNumber(nums);
  // console.log(object);
  // console.log(Object.keys(object));
  // console.log(Object.values(object));
  // const index = Object.values(object).indexOf(1);
  // console.log("index", index);
  // console.log(Object.keys(object)[index]);

  // 26. Remove Duplicates from Sorted Array
  // const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
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

  // const removeDuplicates = function (nums) {
  //   const n = nums.length;
  //   if (n === 1) return n;
  //   let left = 0;
  //   let right = 1;
  //   while (right < n) {
  //     if (nums[right] === nums[left]) {
  //       right++;
  //     } else {
  //       left++;
  //       nums[left] = nums[right];
  //       right++;
  //     }
  //   }
  //   return nums;
  // };

  // console.log(removeDuplicates(nums));
});
</script>
