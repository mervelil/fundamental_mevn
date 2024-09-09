import Vue from 'vue'
import Router from 'vue-router'
import EmployeeCrud from '@/components/EmployeeCrud'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'EmployeeCrud',
      component: EmployeeCrud
    }
  ]
})
