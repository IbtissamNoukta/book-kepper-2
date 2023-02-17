import { createRouter, createWebHistory } from 'vue-router'

import Home from "../components/Home.vue"
import AddBook from "../components/AddBook.vue"
import NotFound from "../components/NotFound.vue"
import UpdateBook from "../components/UpdateBook.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/add/book',
      name: 'AddBook',
      component: AddBook
    },
    {
      path: '/update/book/:id',
      name: 'UpdateBook',
      component: UpdateBook
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
