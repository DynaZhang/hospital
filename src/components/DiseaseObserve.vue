<template>
  <div class="disease-observe">
    <div class="title">病情观察及处理</div>
    <div class="tip">回病房后注意事项: 1.保持呼吸道通畅; 2.呼吸循环抑制; 3.苏醒迟缓; 4.恶心呕吐; 5.尿滞留; 6.过敏反应; 7.其他;</div>
    <div class="table-wrapper">
      <el-table border size="small" style="width: 100%">
        <el-table-column prop="date" label="时间" width="200" />
        <el-table-column prop="desc" label="病情观察及处理(遗嘱)" />
        <el-table-column prop="doctor" label="医生签名" width="200"></el-table-column>
        <el-table-column prop="nurse" label="护士签名" width="200"></el-table-column>
        <el-table-column prop="implementDate" label="执行时间" width="200" />
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "DiseaseObserve",
}
</script>

<style scoped>
.title {
  height: 24px;
  line-height: 24px;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
}
</style>

