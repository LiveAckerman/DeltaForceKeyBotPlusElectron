import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import routerMap from './routerMap'

const Router = createRouter({
  /* 去掉url中的# */
  history: createWebHistory(),
  /* 使用hash模式，url中有#号 */
  // history: createWebHashHistory(),
  routes: routerMap,
})

export default Router
