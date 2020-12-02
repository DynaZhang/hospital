<template>
  <div class="breathing">
    <div class="title">体温数据</div>
    <div class="chart-wrapper">
      <v-chart v-if="chartOptions" :options="chartOptions" />
      <div v-else class="empty">暂无数据</div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Breathing',
  data () {
    return {
      chartOptions: null
    }
  },
  mounted() {
    // const xDataList = []
    // const yDataList = []
    // const recordTime = this.formMessage.monitorDate[1].getTime() - this.formMessage.monitorDate[0].getTime()
    // const count = Math.ceil(recordTime / (this.formMessage.often * 60 * 1000))
    // for (let i = 0; i <= count; i++) {
    //   const newDate = new Date(this.formMessage.monitorDate[0].getTime() + i * this.formMessage.often * 60 * 1000)
    //   xDataList.push(moment(newDate).format('yyyy-MM-DD HH:mm'))
    //   const newValue = parseInt(Math.random() * 40)
    //   yDataList.push(newValue)
    // }
    // this.chartOptions = {
    //   grid: {
    //
    //   },
    //   legend: {
    //     data: ['体温']
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
    //     name: '℃',
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
    //       name: '体温',
    //       data: yDataList,
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
