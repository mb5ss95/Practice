import Vue from 'vue'
import VueRouter from 'vue-router'
import adminMenuDetail from "../views/admin-menu/Detail"
import adminMenuList from "../views/admin-menu/List"
import adminMenuMain from "../views/admin-menu/Main"
import adminMenuRegister from "../views/admin-menu/Register"
import orderDetail from "../views/order/Detail"
import orderList from "../views/order/List"
import orderMain from "../views/order/Main"
import orderRegister from "../views/order/Register"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: orderMain
  },
  {
    path: '/order',
    name: 'order',
    component: orderList
  },
  {
    path: '/order/register',
    name: 'order-register',
    component: orderRegister
  },
  {
    path: '/order/register/:id',
    name: 'order-update',
    component: orderRegister
  },
  {
    path: '/order/:id',
    name: 'order-detail',
    component: orderDetail
  },

  // admin
  {
    path: '/admin/home',
    name: 'admin-home',
    component: adminMenuMain
  },
  {
    path: '/admin/menu',
    name: 'admin-menu',
    component: adminMenuList
  },
  {
    path: '/admin/menu/register',
    name: 'admin-register',
    component: adminMenuRegister
  },
  {
    path: '/admin/menu/register/:id',
    name: 'admin-update',
    component: adminMenuRegister
  },
  {
    path: '/admin/menu/:id',
    name: 'admin-detail',
    component: adminMenuDetail
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
