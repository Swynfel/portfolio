<template>
  <div id="app">
    <Banner/>
    <Content/>
  </div>
</template>

<script>
import Banner from './banner/Banner.vue'
import Content from './content/Content.vue'

export default {
  name: 'Index',
  components: {
    Banner,
    Content
  }
}
</script>

<style lang="scss">
.section {
  padding-bottom: 1em;
}
</style>
