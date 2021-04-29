import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect:'/home'
  },
  {
    path:'/home',
    name:'home',
    component: () => import('../views/ym/home')
  }
]

const router = new VueRouter({
  routes
})

export default router
