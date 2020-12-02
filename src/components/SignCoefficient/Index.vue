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
          // const xDataList = []
          // const yDataList = []
          // const recordTime = this.formMessage.monitorDate[1].getTime() - this.formMessage.monitorDate[0].getTime()
          // const count = Math.ceil(recordTime / (this.formMessage.often * 60 * 1000))
          // for (let i = 0; i <= count; i++) {
          //   const newDate = new Date(this.formMessage.monitorDate[0].getTime() + i * this.formMessage.often * 60 * 1000)
          //   xDataList.push(moment(newDate).format('yyyy-MM-DD HH:mm'))
          //   const newValue = parseInt(Math.random() * 4 + 37)
          //   yDataList.push(newValue)
          // }
          // this.chartOptions = {
          //   grid: {
          //
          //   },
          //   legend: {
          //     data: ['吸氧(L/min)']
          //   },
          //   tooltip: {
          //     trigger: 'axis'
          //   },
          //   xAxis: {
          //     type: 'category',
          //     name: '时间',
          //     boundaryGap: false,
          //     data: xDataList,
          //     minorTick: {
          //       show: true
          //     },
          //     splitLine: {
          //       show: true,
          //       lineStyle: {
          //         color: '#999'
          //       }
          //     },
          //     minorSplitLine: {
          //       show: true,
          //       splitNumber: 6,
          //       lineStyle: {
          //         color: '#ddd'
          //       }
          //     }
          //   },
          //   yAxis: {
          //     name: '吸氧(L/min)',
          //     minorTick: {
          //       show: true
          //     },
          //     splitLine: {
          //       lineStyle: {
          //         color: '#999'
          //       }
          //     },
          //     minorSplitLine: {
          //       show: true,
          //       lineStyle: {
          //         color: '#ddd'
          //       }
          //     }
          //   },
          //   series: [
          //     {
          //       type: 'line',
          //       name: '吸氧(L/min)',
          //       data: yDataList,
          //       smooth: true
          //     }
          //   ]
          // }
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
  width: 100%;
  height: 400px;
}
.empty {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
