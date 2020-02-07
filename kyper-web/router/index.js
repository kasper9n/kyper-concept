import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index.js'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Dashboard from '@/views/Dashboard.vue'
import Releases from '@/views/Releases.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/app',
    component: Dashboard,
  },
  {
    path: '/app/releases',
    component: Releases,
    meta: { title: 'Releases - Kyper' },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title

  if (to.path.startsWith('/app')) {
    if (store.state.account.loggedIn) {
      store.commit('appArea', true)
      next()
    } else {
      next({ path: '/login', query: { continue: to.path } })
    }
  } else {
    store.commit('appArea', false)
    next()
  }
})

export default router
