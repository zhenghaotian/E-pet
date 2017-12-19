import {GETDATA, GETCATFOOD, GETCLASSIFY, GETBRAND, GETALLBRAND} from './types'

export default {
  /*获取主页内容*/
  [GETDATA] (state, {data}) {
    state.datas = data
    console.log('GETDATA')
  },
  [GETCATFOOD] (state, {data}){
    state.catFood = data
    console.log('GETCATFOOD')
  },
  [GETCLASSIFY] (state, {data}){
    state.classify = data
    console.log('GETCLASSIFY')
  },
  [GETBRAND] (state, {data}){
    state.brand = data
    console.log('GETBRAND')
  },
  [GETALLBRAND] (state, {data}){
    state.allBrand = data
    console.log('GETALLBRAND')
  }

}