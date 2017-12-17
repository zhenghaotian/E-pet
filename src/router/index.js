import Vue from 'vue'
import Router from 'vue-router'

import homeEpet from '../pages/homeEpet/homeEpet.vue'
import home from '../pages/home/home.vue'
import catFoot from '../pages/catFoot/catFoot.vue'

import classify from '../pages/classify/classify.vue'

import shopCar from '../pages/shopCar/shopCar.vue'

import myPet from '../pages/myPet/myPet.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/homeEpet/home'
    },
    {
      path: '/homeEpet',
      component: homeEpet,
      children: [
        {
          path: 'home',
          component: home
        },
        {
          path: 'catFoot',
          component: catFoot
        }
      ]
    },
    {
      path: '/classify',
      component: classify,
    },
    {
      path: '/shopCar',
      component: shopCar
    },
    {
      path: '/myPet',
      component: myPet
    }
  ]
})
