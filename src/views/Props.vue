<template>
  <h3>Props</h3>
  <user-modal />

  <el-table :data="userArray" style="width: 100%">
    <el-table-column type="selection" width="55" />
    <el-table-column type="index" width="50" />
    <el-table-column prop="name" label="姓名" width="180" />
    <el-table-column prop="ID" label="身分證" width="180" />
    <el-table-column prop="phone" label="手機" width="180" />
    <el-table-column prop="" label="查看" width="180">
      <template #default="{ row }">
        <user-modal :data="row" />
      </template>
    </el-table-column>
  </el-table>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";
import UserModal from "./../components/UserModal.vue";

const userArray = ref([
  {
    name: "James Lian",
    ID: "A123456789",
    phone: "0911111111",
  },
]);
</script>
