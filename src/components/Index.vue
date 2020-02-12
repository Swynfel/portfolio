<template>
  <div id="app">
    <Banner/>
    <Lorem/>
    <Lorem/>
    <Lorem/>
  </div>
</template>

<script>
import Banner from './Banner.vue'
import Lorem from './Lorem.vue'

export default {
  name: 'Index',
  components: {
    Banner,
    Lorem
  }
}
</script>
