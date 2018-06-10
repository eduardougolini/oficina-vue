import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Oficina from '@/components/Oficina'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Login',
      name: 'Oficina',
      component: Oficina
    }
  ]
})
