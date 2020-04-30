import Vue from 'vue'
import VueI18n from 'vue-i18n'
import english from '@/lang/en.json'

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: { 'en': english },
})

const loadedLanguages = ['en']

export const supportedLanguages = ['en', 'fr', 'jp']

function setI18nLanguage (lang) {
  i18n.locale = lang
  document.querySelector('html').setAttribute('lang', lang)
  return lang
}

export function selectLanguage(lang) {
  if (i18n.locale === lang) {
    return Promise.resolve(setI18nLanguage(lang))
  }

  if (loadedLanguages.includes(lang)) {
    return Promise.resolve(setI18nLanguage(lang))
  }

  return import(`@/lang/${lang}.json`).then(
    messages => {
      i18n.setLocaleMessage(lang, messages)
      loadedLanguages.push(lang)
      return setI18nLanguage(lang)
    }
  )
}

export default i18n
