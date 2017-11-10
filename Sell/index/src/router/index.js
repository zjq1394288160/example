import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import  Home from '../components/Home.vue'
import  Me from '../components/Me.vue'
import  Order from '../components/Order.vue'
import  OrderDetail from '../components/Order/OrderDetail.vue'
import  Find from '../components/Find.vue'
import  Hello from '../components/Hello.vue'
import  ZhangHu from '../components/ZhangHu.vue'
import  Calculate from '../components/Calculate.vue'
import  Exit from '../components/Exit.vue'
import  Classify from '../components/Classify.vue'
import  Location from '../components/Location.vue'
import  Search from '../components/Search.vue'
import  Address from '../components/Address.vue'
import  Addressadd from '../components/Addressadd.vue'
import  AddressChange from '../components/AddressChange.vue'




Vue.use(Router)    //路径 和 视图  --一一对应关系   路径 视图(组件)  名字

export default new Router({
  routes: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
          path:'/me',
          name:'me',
          component:Me,
      },
      {
          path:'/find',
          name:'find',
          component:Find,
      },
      {
          path:'/order',
          name:'order',
          component:Order,
      },
      {
          path:'/orderdetail',
          name:'orderdetail',
          component:OrderDetail,
      },
      {
          path:'/hello',
          name:'hello',
          component:Hello,
      },
      {
          path:'/zhanghu',
          name:'zhanghu',
          component:ZhangHu,
      },
      {
          path:'/calculate',
          name:'calculate',
          component:Calculate,
      },
      {
          path:'/exit',
          name:'exit',
          component:Exit,
      },
      {
          path:'/classify',
          name:'classify',
          component:Classify,
      },
      {
          path:'/location',
          name:'location',
          component:Location,
      },
      {
          path:'/search',
          name:'search',
          component:Search,
      },
      {
          path:'/address',
          name:'address',
          component:Address,
      },
      {
          path:'/addressadd',
          name:'addressadd',
          component:Addressadd,
      },
      {
          path:'/addresschange',
          name:'addresschange',
          component:AddressChange,
      }

  ]
})
