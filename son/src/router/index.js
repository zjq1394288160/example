import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import One from '../components/One'
import Order from '../components/Order'
import Demo from '../components/Demo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/one',
      name: 'one',
      component: One,
      children: [
        { path: "/one/order", component: Order },
        { path: "/one/demo", component: Demo }
      ],
    }
  ]
})
