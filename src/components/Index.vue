<template>
  <div id="app">
    <Banner/>
      <Lorem/>
      <Lorem/>
      <Lorem/>
      <Code/>
  </div>
</template>

<script>
import Banner from './Banner.vue'
import Lorem from './Lorem.vue'
import Code from './Code.vue'

export default {
  name: 'Index',
  components: {
    Banner,
    Lorem,
    Code
  }
}
</script>
