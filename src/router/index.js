import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NavMenu from '@/components/NavMenu'
import AppBar from '@/components/AppBar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/NavMenu',
      name: 'NavMenu',
      component: NavMenu
    },{
      path: '/AppBar',
      name: 'AppBar',
      component: AppBar
    }
  ]
})
