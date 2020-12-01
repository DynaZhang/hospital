<template>
  <div class="pulse">
    <div class="form-wrapper">
      <el-form :model="formMessage" ref="formMessage" :rules="formRules" inline>
        <el-form-item label="时间范围" prop="monitorDate">
          <el-date-picker size="small" v-model="formMessage.monitorDate" type="datetimerange" format="yyyy-MM-dd HH:mm" range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间"/>
        </el-form-item>
        <el-form-item label="时间间隔" prop="often">
          <el-select size="small" v-model="formMessage.often" placeholder="请选择" clearable>
            <el-option label="3分钟" :value="3"/>
            <el-option label="4分钟" :value="4"/>
            <el-option label="5分钟" :value="5"/>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small" :loading="submitting" @click="handleGetData">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="chart-wrapper">
      <v-chart :options="chartOptions" />
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'Pulse',
  data () {
    return {
      formMessage: {
        monitorDate: null,
        often: 3
      },
      formRules: {
        monitorDate: [
          {validator: this.validateRangeDate, trigger: 'change'}
        ],
        often: [
          {type: 'number', required: true, message: '请选择时间间隔', trigger: 'change'}
        ]
      },
      submitting: false,
      chartOptions: {}
    }
  },
  methods: {
    validateRangeDate(rule,value,callback) {
      if (!value) {
        callback(new Error('请选择监测时间'))
      } else if (!value[0] && value[1]) {
        callback(new Error('请选择开始时间'))
      } else if (value[0] && !value[1]) {
        callback(new Error('请选择结束时间'))
      } else {
        callback()
      }
    },
    handleGetData() {
      this.$refs.formMessage.validate(valid => {
        if (valid) {
          const xDataList = []
          const yDataList = []
          console.log(this.formMessage.monitorDate[1].getTime());
          const recordTime = this.formMessage.monitorDate[1].getTime() - this.formMessage.monitorDate[0].getTime()
          const count = Math.ceil(recordTime / (this.formMessage.often * 60 * 1000))
          for (let i = 0; i <= count; i++) {
            const newDate = new Date(this.formMessage.monitorDate[0].getTime() + i * this.formMessage.often * 60 * 1000)
            xDataList.push(moment(newDate).format('yyyy-MM-DD HH:mm'))
            const NSBP = parseInt(Math.random() * 200)
            const NDBP = parseInt(Math.random() * 200)
            const Pulse = parseInt(Math.random() * 200)
            const RR = parseInt(Math.random() * 200)
            yDataList.push({
              NSBP,
              NDBP,
              Pulse,
              RR
            })
          }
          this.chartOptions = {
            grid: {

            },
            legend: {
              data: ['脉搏','无创收缩压','无创舒张压','呼吸频率']
            },
            tooltip: {
              trigger: 'axis'
            },
            xAxis: {
              type: 'category',
              name: '时间',
              boundaryGap: false,
              data: xDataList,
              minorTick: {
                show: true
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: '#999'
                }
              },
              minorSplitLine: {
                show: true,
                splitNumber: 6,
                lineStyle: {
                  color: '#ddd'
                }
              }
            },
            yAxis: {
              name: '次数',
              minorTick: {
                show: true
              },
              splitLine: {
                lineStyle: {
                  color: '#999'
                }
              },
              minorSplitLine: {
                show: true,
                lineStyle: {
                  color: '#ddd'
                }
              }
            },
            series: [
              {
                type: 'line',
                name: '脉搏',
                data: yDataList.map(item => item.Pulse),
                smooth: true
              },
              {
                type: 'line',
                name: '无创收缩压',
                data: yDataList.map(item => item.NSBP),
                smooth: true
              },
              {
                type: 'line',
                name: '无创舒张压',
                data: yDataList.map(item => item.NDBP),
                smooth: true
              },
              {
                type: 'line',
                name: '呼吸频率',
                data: yDataList.map(item => item.RR),
                smooth: true
              }
            ]
          }
        }
      })
    }
  },
  mounted() {}
}
</script>

<style scoped>
.form-wrapper {
  margin-bottom: 20px;
}
.chart-wrapper {
  width: 100%;
  height: 400px;
}
</style>
