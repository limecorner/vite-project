<template>
  <el-button @click="dialogVisible = true">新增使用者</el-button>
  <el-dialog v-model="dialogVisible" title="新增使用者" width="50%">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
      :size="formSize"
      status-icon
    >
      <el-form-item label="姓名" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item label="身分證" prop="ID">
        <el-input v-model="ruleForm.ID" />
      </el-form-item>
      <el-form-item label="手機" prop="phone">
        <el-input v-model="ruleForm.phone" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">
          Create
        </el-button>
        <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script lang="ts" setup>
import { reactive, ref, toRef } from "vue";
import type { FormInstance, FormRules } from "element-plus";
const props = defineProps({
  data: {
    type: Object,
    // required: true,
  },
});
const userData = toRef(props, "data");

interface RuleForm {
  name: string;
  ID: "";
  phone: "";
  // region: string;
}
const dialogVisible = ref<boolean>(false);
const formSize = ref("default");
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive<RuleForm>({
  name: "",
  ID: "",
  phone: "",
  // region: "",
});

const rules = reactive<FormRules<RuleForm>>({
  name: [{ required: true, message: "請輸入姓名", trigger: "blur" }],
  ID: [{ required: true, message: "請輸入ID", trigger: "blur" }],
  phone: [{ required: true, message: "請輸入手機", trigger: "blur" }],
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!", fields);
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>
