<template>
  <el-row class="TopMessage" :gutter="16">
    <el-col :span="3">
      <span class="label">科别：</span>
      <span class="value"></span>
    </el-col>
    <el-col :span="3">
      <span class="label">床号：</span>
      <span class="value"></span>
    </el-col>
    <el-col :span="3">
      <span class="label">住院号：</span>
      <span class="value"></span>
    </el-col>
    <el-col :span="3">
      <span class="label">姓名：</span>
      <span class="value"></span>
    </el-col>
    <el-col :span="3">
      <span class="label">性别：</span>
      <span class="value"></span>
    </el-col>
    <el-col :span="3">
      <span class="label">年龄：</span>
      <span class="value"></span>
    </el-col>
    <el-col :span="6">
      <span class="label">日期：</span>
      <span class="value"></span>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'TopMessage',
  data() {
    return {}
  }
}
</script>

<style scoped>
.label {
  height: 20px;
  line-height: 20px;
  text-align: center;
}
.value {
  height: 20px;
  line-height: 20px;
}
</style>
