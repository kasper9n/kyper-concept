import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
import store from '@/store/index.js'

Vue.config.productionTip = false

Vue.directive('title', {
  inserted: (el, binding) => { document.title = binding.value },
  update: (el, binding) => { document.title = binding.value },
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
