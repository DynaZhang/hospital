import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import Echarts from 'echarts'
import VueEcharts from 'vue-echarts'

import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/styles/global.css'

Vue.config.productionTip = false
Vue.prototype.$echarts = Echarts

Vue.use(ElementUI)
Vue.component('v-chart', VueEcharts)

new Vue({
  render: h => h(App),
}).$mount('#app')
