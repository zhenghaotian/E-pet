import axios from 'axios'

import {GETDATA} from './types'

export default {
  getData ({commit}) {
    axios.get('/api/home')
      .then((response) => {
        let data = response.data
        commit(GETDATA, {data})
      }, () => {
        console.log('请求home失败!')
      })
  }
}