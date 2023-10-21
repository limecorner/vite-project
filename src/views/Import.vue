<template></template>

<script setup>
import { dateToWeekday } from "./../utils/helpers/date";
const date = new Date("2023-10-24");
const day = dateToWeekday(date);
console.log("day", day);
</script>
<style scoped></style>
