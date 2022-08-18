import Vue from 'vue'
import VueRouter from 'vue-router'
// import CyanList from '../views/CyanList.vue'
// import Example from '../views/Example.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/cyanList'
  }
  // {
  //   path: '/example',
  //   name: 'Example',
  //   component: Example
  // }
]
// 读取 @/views/ 下所有 vue 组件，并注册
const viewsComponents = require.context('@/views/', true, /\.vue$/)
viewsComponents.keys().forEach((item, index) => {
  const comp = viewsComponents(item)
  const name = comp.default.name
  // 追加新组件
  routes.push({
    path: `/${name}`, // 地址
    name: name, // 组件名
    component: comp.default
  })
})

const router = new VueRouter({
  routes
})
export default router
