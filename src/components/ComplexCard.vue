<template>
  <div>
    <h3>
      <slot name="name">名字</slot>
    </h3>
    <h5>
      <!-- 屬性 name 表示預留空間的名稱 -->
      <slot name="interest">興趣</slot>
    </h5>
    <strong>
      <slot name="jobTitle">職稱</slot>
    </strong>
  </div>
</template>
