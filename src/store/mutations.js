import {GETDATA, GETCATFOOD} from './types'

export default {
  /*获取主页内容*/
  [GETDATA] (state, {data}) {
    state.datas = data
  },
  [GETCATFOOD] (state, {data}){
    state.catFood = data
  }

}