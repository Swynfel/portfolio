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
