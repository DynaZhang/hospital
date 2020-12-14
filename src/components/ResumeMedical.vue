<template>
  <div class="resume-medical">
    <div class="title">复苏监测</div>
    <div ref="formWrapper" class="form-wrapper">
      <el-form :model="formMessage" ref="formMessage" :rules="formRules" inline>
        <el-form-item label="监测日期" prop="monitorDate">
          <el-date-picker size="small" v-model="formMessage.monitorDate" type="date" placeholder="请选择"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small" :loading="submitting" @click="handleGetData">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="chart-wrapper">
      <v-chart v-if="chartOptions" :options="chartOptions" />
      <div v-else class="empty">暂无数据</div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "resume-medical",
  data() {
    return {
      formMessage: {
        monitorDate: null
      },
      formRules: {
        monitorDate: [
          {type: 'date', required: true, message: '请选择监测时间', trigger: 'change'}
        ]
      },
      submitting: false,
      chartOptions: null,
      showForm: true
    }
  },
  methods: {
    handleGetData() {
      this.$refs.formMessage.validate(valid => {
        if (valid) {
          const data = [
            {
              type: 'scatter',
              name: '[G]注射用盐酸瑞芬太尼',
              time: new Date(moment(this.formMessage.monitorDate).hour(15).minute(30).unix() * 1000),
              value: 30,
              unit: 'mg'
            },
            {
              type: 'line',
              name: '[G]注射用阿曲库铵',
              time: [new Date(moment(this.formMessage.monitorDate).hour(12).minute(30).unix() * 1000), new Date(moment(this.formMessage.monitorDate).hour(16).minute(30).unix()*1000)],
              value: 30,
              unit: 'mg'
            }
          ]
          const dataSet = [
              [
                  [new Date(moment(this.formMessage.monitorDate).hour(15).minute(30).unix() * 1000), '[G]注射用盐酸瑞芬太尼'],
                  [new Date(moment(this.formMessage.monitorDate).hour(9).minute(30).unix() * 1000), '[G]注射用盐酸瑞芬太尼'],
                  [new Date(moment(this.formMessage.monitorDate).hour(11).minute(30).unix() * 1000), '[G]注射用盐酸瑞芬太尼']
              ],
              [
                [new Date(moment(this.formMessage.monitorDate).hour(9).minute(0).unix() * 1000), '[G]注射用阿曲库铵'],
                [new Date(moment(this.formMessage.monitorDate).hour(11).minute(30).unix()*1000),'[G]注射用阿曲库铵'],
                null,
                [new Date(moment(this.formMessage.monitorDate).hour(12).minute(30).unix() * 1000), '[G]注射用阿曲库铵'],
                [new Date(moment(this.formMessage.monitorDate).hour(16).minute(30).unix()*1000),'[G]注射用阿曲库铵']
              ]
          ]
          const seriesData = []
          data.forEach((item,index) => {
            let series = null
            series = {
              type: item.type,
              data: dataSet[index],
              label: {
                show: true,
                offset: [0, 20],
                formatter: (params) => {
                  console.log(params)
                  return '1.5'
                }
              },
              symbol: item.type === 'line' ? 'rect' : 'arrow'
            }
            seriesData.push(series)
          })
          console.log(seriesData)
          this.chartOptions = {
            grid: {
              left: 150
            },
            tooltip: {},
            xAxis: {
              type: 'time',
              min: new Date(new Date(this.formMessage.monitorDate.toLocaleDateString()).getTime()),
              max: new Date(new Date(this.formMessage.monitorDate.toLocaleDateString()).getTime()+24*60*60*1000-1),
              axisLabel: {
                formatter: (params) => {
                  return `${moment(params).format('HH:mm')}`
                }
              },
              interval: 1 * 60 * 60 * 1000,
              splitLine: {
                interval: 6
              }
            },
            yAxis: [
              {
                type: 'category',
                data: data.map(item => item.name)
              },
            ],
            series: seriesData
          }
        }
      })
    }
  },
  mounted() {
    if (window.matchMedia) {
      const mediaQueryList = window.matchMedia('print')
      mediaQueryList.addListener((mql) => {
        console.log(this.$refs.formWrapper);
        if (mql.matches) {
          this.$refs.formWrapper.style.display = 'none'
          console.log('before print')
        } else {
          this.$refs.formWrapper.style.display = 'block'
          console.log('after print')
        }
      })
    }
  }
}
</script>

<style scoped>
.title {
  height: 24px;
  line-height: 24px;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
}
.form-wrapper {
  margin-bottom: 10px;
}
.chart-wrapper {
  width: 1100px;
  height: 500px;
}
.empty {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
