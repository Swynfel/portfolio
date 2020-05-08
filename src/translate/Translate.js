import T from './T.vue'

export default {
  install(Vue) {
    Vue.component('T', T)
    Vue.component('t', T)

    Vue.prototype.$T = function (translations) {
      var lang = this.$i18n.locale;
      var default_lang = this.$i18n.fallbackLocale;
      var default_translation = "[NO DEFAULT]";
      for(var key in translations) {
        if (key.indexOf(lang) !== -1) {
          return translations[key];
        }
        if (key.indexOf(default_lang) !== -1) {
          default_translation = translations[key];
        }
      }
      return default_translation;
    }
  }
};
