import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from "../views/Main"
import List from "../views/List"
import Detail from "../views/Detail"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/products',
    name: 'List',
    component: List
  },
  {
    path: '/products/:id',
    name: 'Detail',
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
