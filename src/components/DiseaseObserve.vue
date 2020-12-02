<template>
  <div class="disease-observe">
    <div class="title">病情观察及处理</div>
    <div class="tip">回病房后注意事项: 1.保持呼吸道通畅; 2.呼吸循环抑制; 3.苏醒迟缓; 4.恶心呕吐; 5.尿滞留; 6.过敏反应; 7.其他;</div>
    <div class="table-wrapper">
      <el-table size="mini" :data="tableData">
        <el-table-column prop="date" label="时间" width="150"/>
        <el-table-column prop="desc" label="病情观察及处理(遗嘱)" min-width="223"/>
        <el-table-column prop="doctor" label="医生签名" width="80"></el-table-column>
        <el-table-column prop="nurse" label="护士签名" width="80"></el-table-column>
        <el-table-column prop="implementDate" label="执行时间" width="150"/>
      </el-table>
    </div>
    <div class="page-wrapper">
      <el-pagination layout="total,prev,pager,next" :total="20" @current-change="handleCurrentChange"></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "DiseaseObserve",
  data () {
    return {
      tableData: [
        {
          date: '2020-12-02 17:00',
          desc: '我是测试评论',
          doctor: '图片',
          nurse: '图片',
          implementDate: '2020-12-02 17:00'
        },
        {
          date: '2020-12-02 17:00',
          desc: '我是测试评论',
          doctor: '图片',
          nurse: '图片',
          implementDate: '2020-12-02 17:00'
        },
        {
          date: '2020-12-02 17:00',
          desc: '我是测试评论',
          doctor: '图片',
          nurse: '图片',
          implementDate: '2020-12-02 17:00'
        },
        {
          date: '2020-12-02 17:00',
          desc: '我是测试评论',
          doctor: '图片',
          nurse: '图片',
          implementDate: '2020-12-02 17:00'
        },
        {
          date: '2020-12-02 17:00',
          desc: '我是测试评论',
          doctor: '图片',
          nurse: '图片',
          implementDate: '2020-12-02 17:00'
        },
        {
          date: '2020-12-02 17:00',
          desc: '我是测试评论',
          doctor: '图片',
          nurse: '图片',
          implementDate: '2020-12-02 17:00'
        }
      ]
    }
  },
  methods: {
    handleCurrentChange (current) {
      console.log(current)
    }
  }
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
.tip {
  color: #ff0000;
  margin-bottom: 10px;
}
.table-wrapper {
  margin-bottom: 20px;
}
.page-wrapper {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}
</style>

