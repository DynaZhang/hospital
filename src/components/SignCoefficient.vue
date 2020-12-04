<template>
  <div class="index">
    <div class="title">复苏监测</div>
    <div ref="formWrapper" class="form-wrapper">
      <el-form :model="formMessage" ref="formMessage" :rules="formRules" inline>
        <el-form-item label="监测日期" prop="monitorDate">
          <el-date-picker size="small" v-model="formMessage.monitorDate" type="date" placeholder="请选择"/>
        </el-form-item>
        <el-form-item label="监测时间" prop="monitorTime">
          <el-time-picker is-range size="small" v-model="formMessage.monitorTime" range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" placeholder="选择时间范围">
          </el-time-picker>
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
      <v-chart v-if="chartOptions" :options="chartOptions" />
      <div v-else class="empty">暂无数据</div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: 'index',
  data() {
    return {
      formMessage: {
        monitorDate: null,
        monitorTime: null,
        often: 3
      },
      formRules: {
        monitorDate: [
          {type: 'date', required: true, message: '请选择监测时间', trigger: 'change'}
        ],
        monitorTime: [
          {validator: this.validateRangeDate, trigger: 'change'}
        ],
        often: [
          {type: 'number', required: true, message: '请选择时间间隔', trigger: 'change'}
        ]
      },
      submitting: false,
      chartOptions: null,
      showForm: true
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
          const recordTime = this.formMessage.monitorTime[1].getTime() - this.formMessage.monitorTime[0].getTime()
          const count = Math.ceil(recordTime / (this.formMessage.often * 60 * 1000))
          for (let i = 0; i <= count; i++) {
            const newDate = new Date(this.formMessage.monitorTime[0].getTime() + i * this.formMessage.often * 60 * 1000)
            xDataList.push(moment(newDate).format('yyyy-MM-DD HH:mm'))
            const pulse = parseInt(Math.random() * 200)
            const breath = parseInt(Math.random() * 45)
            const NSBP = parseInt(Math.random() * 200)
            const NDBP = parseInt(Math.random() * 200)
            const temperature = parseInt(Math.random() * 45)
            const SPO2 = parseInt(Math.random() * 100)
            yDataList.push({
              pulse,
              breath,
              NSBP,
              NDBP,
              temperature,
              SPO2
            })
          }
          this.chartOptions = {
            grid: {

            },
            legend: {
              data: [
                {
                  name: '脉搏',
                  icon: 'circle'
                },
                {
                  name: '自主呼吸',
                  icon: 'rect'
                },
                {
                  name: '收缩压',
                  icon: 'roundRect'
                },
                {
                  name: '舒张压',
                  icon: 'triangle'
                },
                {
                  name: '体温',
                  icon: 'diamond'
                },
                {
                  name: '血氧饱和度(SPO2)',
                  icon: 'pin'
                }
              ]
            },
            tooltip: {
              trigger: 'axis',
              formatter: (params) => {
                const res = []
                if (params.length > 0) {
                  const time = params[0].axisValueLabel
                  params.forEach((item,index) => {
                    // eslint-disable-next-line no-unused-vars
                    let unit
                    if (index <= 1) {
                     unit= '次'
                    } else if (index === 4) {
                     unit = '℃'
                    } else if (index === 5) {
                     unit = '%'
                    } else {
                     unit = ''
                    }
                    const pushItem = `<p>${item.marker}${item.seriesName}：${item.value}${unit}</p>`
                    res.push(pushItem)
                  })
                  return `<div><p>时间：${time}</p>${res.join('')}</div>`
                } else {
                  return ''
                }
              }
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
            yAxis: [
              {
                type: 'value',
                position: 'left',
                scale: true,
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
              {
                type: 'value',
                position: 'right',
                scale: true,
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
              }
            ],
            series: [
              {
                type: 'line',
                name: '脉搏',
                yAxisIndex: 0,
                data: yDataList.map(item => item.pulse),
                symbol: 'circle',
                symbolSize: 10
              },
              {
                type: 'line',
                name: '自主呼吸',
                yAxisIndex: 1,
                data: yDataList.map(item => item.breath),
                symbol: 'rect',
                symbolSize: 10
              },
              {
                type: 'line',
                name: '收缩压',
                yAxisIndex: 0,
                data: yDataList.map(item => item.NSBP),
                symbol: 'roundRect',
                symbolSize: 10
              },
              {
                type: 'line',
                name: '舒张压',
                yAxisIndex: 0,
                data: yDataList.map(item => item.NDBP),
                symbol: 'triangle',
                symbolSize: 10
              },
              {
                type: 'line',
                name: '体温',
                yAxisIndex: 1,
                data: yDataList.map(item => item.temperature),
                symbol: 'diamond',
                symbolSize: 10
              },
              {
                type: 'line',
                name: '血氧饱和度(SPO2)',
                yAxisIndex: 1,
                data: yDataList.map(item => item.SPO2),
                symbol: 'pin',
                symbolSize: 10
              }
            ]
          }
        }
      })
    }
  },
  mounted() {
    if (window.matchMedia) {
      const mediaQueryList = window.matchMedia('print')
      mediaQueryList.addListener((mql) => {
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
  height: 600px;
}
.empty {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
