import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index.js'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Dashboard from '@/views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    component: Login,
  },
  {
    path: '/app',
    name: 'dashboard',
    component: Dashboard,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.path.startsWith('/app') && store.state.account.loggedIn) {
    if (store.state.account.loggedIn) {
      store.commit('appArea', true)
      next()
    } else {
      next('/login')
    }
  } else {
    store.commit('appArea', false)
    next()
  }
})

export default router
