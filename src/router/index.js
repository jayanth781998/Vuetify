// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home.vue'),
      },{
        path:"/store",
        name: "store",
        component: ()=>import("@/views/Shop.vue")
      },{
        path:"/cart",
        name: "cart",
        component: ()=>import("@/views/Cart.vue")
      }
      
    ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
