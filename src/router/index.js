import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddPost from '../views/AddPost.vue'
import ShowPost from '../views/ShowPost.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    name: 'ShowPost',
    component: () => import('../views/ShowPost.vue')
  },
  {
    path: '/',
    name: 'AddPost',
    component: () => import('../views/AddPost.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
