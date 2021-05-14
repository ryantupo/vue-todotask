import {
  createRouter,
  createWebHistory
} from 'vue-router'

import About from '../views/About'
import Home from '../views/Home'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
  },

  {
    path: '/About',
    name: 'About',
    component: About,
  },
]

// eslint-disable-next-line no-unused-vars
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router