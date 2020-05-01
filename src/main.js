import Vue from 'vue'
import Buefy from 'buefy'
Vue.use(Buefy)
import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo)

import './scss/style.scss'

import router from './router'
import i18n from './i18n.js'

import App from './App.vue'

new Vue({
  el: "#app",
  router,
  i18n,
  render: h => h(App),
})
