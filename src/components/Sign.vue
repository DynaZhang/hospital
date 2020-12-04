<template>
  <div class="Sign">
    <el-row :gutter="32">
      <el-col :span="10">
        <el-col :span="12">
          <div class="label">PCAU医生: </div>
        </el-col>
        <el-col :span="12"></el-col>
      </el-col>
      <el-col :span="10">
        <el-col :span="12">
          <div class="label">PCAU护士: </div>
        </el-col>
        <el-col :span="12"></el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Sign',
  data() {
    return {}
  }
}
</script>

<style scoped>
.row {
  margin-bottom: 20px;
}
.label {
  height: 20px;
  line-height: 20px;
  text-align: center;
}
.value {
  height: 20px;
  line-height: 20px;
  border-bottom: 1px solid #000000;
}
</style>
