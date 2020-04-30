import Vue from 'vue'
import Buefy from 'buefy'
import './scss/buefy.scss'
import App from './App.vue'
import router from './router'

Vue.use(Buefy)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
