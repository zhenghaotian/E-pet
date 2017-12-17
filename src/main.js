import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'

import store from './store/index'
import router from './router/index'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import 'element-ui/lib/theme-chalk/index.css'
import '../static/reset.css'
import './mock/mockServer'  //mock数据

Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
