import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Works from '@/views/Works.vue'
import Blog from '@/views/Blog.vue'
import Contact from '@/views/Contact.vue'
import NotFound from '@/views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/works',
    name: 'works',
    component: Works
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  { path: '/404',
    name: 'not_found',
    component: NotFound,
  },
  { path: '*',
    redirect: '/404'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
