import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NavMenu from '@/components/NavMenu'
import AppBar from '@/components/AppBar'
import Profile from '@/components/Profile'
import About from '@/components/About'
import BreadCrumbs from '@/components/BreadCrumbs'

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
    },{
      path: '/Profile',
      name: 'Profile',
      component: Profile
    },{
      path: '/About',
      name: 'About',
      component: About
    },{
      path: '/BreadCrumbs',
      name: 'BreadCrumbs',
      component: BreadCrumbs
    }
  ]
})
