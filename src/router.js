import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './components/Index.vue'
import { supportedLanguages } from './i18n'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/:locale',
      name: 'index',
      component: Index,
      beforeEnter (to, from, next) {
        const lang = to.params.locale
        if (!supportedLanguages.includes(lang)) {
          return next('en')
        }
        return next();
      },
    },
    {
      path: '*',
      redirect: '/en',
    }
  ],
  mode: "history",
})

/*
import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './components/Index.vue'
import i18n from './i18n.js'

Vue.use(VueRouter)

const supported = ['en', 'fr']

export default new VueRouter({
  routes: [{
    path: '/:lang',
    component: {
      template: '<router-view/>'
    },
    beforeEnter (to, from, next) {
      const lang = to.params.lang
      if (!supported.includes(lang)) {
        return next('en')
      }
      if (i18n.locale !== lang) {
        i18n.locale = lang
      }
      return next();
    },
    children: [{
      path: '*',
      name: 'Index',
      component: Index,
    }],
  }],
})
*/
