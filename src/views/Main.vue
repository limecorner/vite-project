<template>
  <div>
    <h3>Main</h3>
    <a href="https://www.google.com.tw/">Google</a>
    <li>
      <router-link :to="{ name: 'user', params: { id: 1 } }"
        >/user/1</router-link
      >
    </li>
    <li>
      <router-link :to="{ name: 'user', params: { id: 2 } }"
        >/user/2</router-link
      >
    </li>
  </div>
</template>
