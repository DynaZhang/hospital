import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:54980/api'
axios.defaults.timeout = 30000

// 病人基础信息
export const getOPSDetail = () => {
  return axios.request({
    method: 'get',
    url: '/OPS_Queue/GetOPS_Queue'
  })
}
