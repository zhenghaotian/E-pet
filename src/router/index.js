import Vue from 'vue'
import Router from 'vue-router'

import homeEpet from '../pages/homeEpet/homeEpet.vue'
import home from '../pages/home/home.vue'
import catFoot from '../pages/catFoot/catFoot.vue'

import classify from '../pages/classify/classify.vue'
import tab1 from '../pages/tab1/tab1.vue'
import tab2 from '../pages/tab2/tab2.vue'

import shopCar from '../pages/shopCar/shopCar.vue'

import myPet from '../pages/myPet/myPet.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
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
        }
      ]
    },
    {
      path: '/classify',
      component: classify,
      children: [
        {
          path: 'tab1',
          component: tab1
        },
        {
          path: 'tab2',
          component: tab2
        }
      ]
    },
    {
      path: '/shopCar',
      component: shopCar
    },
    {
      path: '/myPet',
      component: myPet
    },
    {
      path: '/catFoot',
      component: catFoot
    }
  ]
})
