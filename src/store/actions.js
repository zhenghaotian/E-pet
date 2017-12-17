import axios from 'axios'

import {GETDATA, GETCATFOOD} from './types'

export default {
  getData ({commit}) {
    axios.get('/api/home')
      .then((response) => {
        let data = response.data
        commit(GETDATA, {data})
      }, () => {
        console.log('请求home失败!')
      })
  },
  getCatFood ({commit}) {
    axios.get('/api/catFood')
      .then((response) => {
        let data = response.data
        commit(GETCATFOOD, {data})
      }, () => {
        console.log('请求catFood失败!')
      })
  }
}