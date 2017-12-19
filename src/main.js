import Vue from 'vue'
import App from './App'

import store from './store/index'
import router from './router/index'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


import '../static/reset.css'
import './mock/mockServer'  //mock数据
import './filters/index'

Vue.use(ElementUI)
Vue.use(MintUI)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
