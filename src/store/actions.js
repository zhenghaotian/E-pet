import axios from 'axios'

import {GETDATA, GETCATFOOD, GETCLASSIFY, GETBRAND, GETALLBRAND} from './types'

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
  },
  getClassify ({commit}) {
    axios.get('/api/classify')
      .then((response) => {
        let data = response.data
        commit(GETCLASSIFY, {data})
      }, () => {
        console.log('请求classify失败!')
      })
  },
  getBrand ({commit}) {
    axios.get('/api/brand')
      .then((response) => {
        let data = response.data
        commit(GETBRAND, {data})
      }, () => {
        console.log('请求classify失败!')
      })
  },
  getAllBrand ({commit}) {
    axios.get('/api/allBrand')
      .then((response) => {
        let data = response.data
        commit(GETALLBRAND, {data})
      }, () => {
        console.log('请求allBrand失败!')
      })
  }
}