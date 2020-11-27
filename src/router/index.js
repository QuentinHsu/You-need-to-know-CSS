import {
  createRouter,
  createWebHistory
} from 'vue-router'

import categories from '@/views/categories'
import border_background from '@/views/border_background'
import translucent_borders from '@/components/border_background/translucent_borders'
import multiple_borders from '@/components/border_background/multiple_borders'
const routes = [
  {
    path: '/',
    name: 'categories',
    component: categories
  },
  {
    path: '/border_background',
    name: 'border_background',
    /**
     * 嵌套路由，父级路由必须有个对应的组件，不然无法跳转/渲染到其子路由页面
     */
    component: border_background,
    children: [{
        path: 'translucent_borders',
        name: 'translucentBorders',
        component: translucent_borders
      },
      {
        path: 'multiple_borders',
        name: 'multiple_borders',
        component: multiple_borders
      }
    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router