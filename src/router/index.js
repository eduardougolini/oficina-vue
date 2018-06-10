import Vue from 'vue'
import Router from 'vue-router'
import AnonymousPage from '@/components/AnonymousPage'
import Oficina from '@/components/Oficina'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AnonymousPage',
      component: AnonymousPage
    },
    {
      path: '/Login',
      name: 'Oficina',
      component: Oficina
    }
  ]
})
