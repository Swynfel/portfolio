<template>
  <div id="body">
    <Education/>
    <Code/>
    <Footer/>
    <section class="section">
    </section>
  </div>
</template>

<script>
import Education from './Education.vue'
import Code from './Code.vue'
import Footer from './Footer.vue'

export default {
  name: 'Index',
  components: {
    Education,
    Code,
    Footer,
  }
}
</script>
