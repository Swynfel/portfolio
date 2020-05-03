<template>
  <div id="app">
    <Banner/>
    <Content/>
  </div>
</template>

<script>
import Banner from './banner/Banner.vue'
import Content from './content/Content.vue'
import { selectLanguage } from '../i18n.js'

export default {
  name: 'Index',
  components: {
    Banner,
    Content,
  },
  beforeRouteEnter (to, from, next) {
    selectLanguage(to.params.locale).then(() => next())
  },
  beforeRouteUpdate (to, from, next) {
    selectLanguage(to.params.locale).then(() => next())
  }
}
</script>
