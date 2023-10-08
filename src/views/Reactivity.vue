<template><h3>Reactivity</h3></template>

<script setup>
let obj = { x: 1 };
let obj2 = { y: 2 };
Object.defineProperty(obj2, "x", {
  get() {
    return obj.x;
  },
  set(value) {
    obj.x = value;
  },
});
obj2.x = 35;
console.log(obj.x);
</script>
