import Vue from 'vue'
import Buefy from 'buefy'
import './scss/style.scss'
import App from './App.vue'
import router from './router'
import i18n from './i18n.js'

Vue.use(Buefy)

new Vue({
  el: "#app",
  router,
  i18n,
  render: h => h(App),
})
