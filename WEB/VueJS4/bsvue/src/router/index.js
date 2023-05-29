import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from "../views/todos/Main"
import Detail from "../views/todos/Detail"
import List from "../views/todos/List"



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/todos',
    name: 'List',
    component: List
  },
  {
    path: '/todos/:id',
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
