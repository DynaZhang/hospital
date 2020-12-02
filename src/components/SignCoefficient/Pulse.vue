<template>
  <div class="pulse">
    <div class="title">血压、脉搏数据</div>
    <div class="chart-wrapper">
      <v-chart v-if="chartOptions" :options="chartOptions" />
      <div v-else class="empty">暂无数据</div>
    </div>
  </div>
</template>

<script>
// import moment from 'moment'
export default {
  name: 'Pulse',
  data () {
    return {
      chartOptions: null
    }
  },
  mounted() {
    // const xDataList = []
    // const yDataList = []
    // console.log(this.formMessage.monitorDate[1].getTime());
    // const recordTime = this.formMessage.monitorDate[1].getTime() - this.formMessage.monitorDate[0].getTime()
    // const count = Math.ceil(recordTime / (this.formMessage.often * 60 * 1000))
    // for (let i = 0; i <= count; i++) {
    //   const newDate = new Date(this.formMessage.monitorDate[0].getTime() + i * this.formMessage.often * 60 * 1000)
    //   xDataList.push(moment(newDate).format('yyyy-MM-DD HH:mm'))
    //   const NSBP = parseInt(Math.random() * 200)
    //   const NDBP = parseInt(Math.random() * 200)
    //   const Pulse = parseInt(Math.random() * 200)
    //   const RR = parseInt(Math.random() * 200)
    //   yDataList.push({
    //     NSBP,
    //     NDBP,
    //     Pulse,
    //     RR
    //   })
    // }
    // this.chartOptions = {
    //   grid: {
    //
    //   },
    //   legend: {
    //     data: ['脉搏','无创收缩压','无创舒张压','呼吸频率']
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
    //     name: '次数',
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
    //       name: '脉搏',
    //       data: yDataList.map(item => item.Pulse),
    //       smooth: true
    //     },
    //     {
    //       type: 'line',
    //       name: '无创收缩压',
    //       data: yDataList.map(item => item.NSBP),
    //       smooth: true
    //     },
    //     {
    //       type: 'line',
    //       name: '无创舒张压',
    //       data: yDataList.map(item => item.NDBP),
    //       smooth: true
    //     },
    //     {
    //       type: 'line',
    //       name: '呼吸频率',
    //       data: yDataList.map(item => item.RR),
    //       smooth: true
    //     }
    //   ]
    // }
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
