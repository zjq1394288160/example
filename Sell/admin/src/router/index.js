import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Step from '../components/Step.vue'
import Store from '../components/Store'
import Order from '../components/Order'


import Element from '../components/Element.vue'


Vue.use(Router)

export default new Router({
  routes: [
      {
          path: '/',
          redirect:'/login'
      },
      {
          path: '/login',
          name: 'login',
          component: Login
      },
      {
          path: '/register',
          name: 'register',
          component: Register
      },
      {
          path: '/step',
          name: 'step',
          component: Step
      },
      {
          path:'/store',
          name:'store',
          component:Store
      },
      {
          path:'/order',
          name:'order',
          component:Order
      },
      {
          path: '/element',
          name: 'element',
          component: Element
      },
  ]
})
