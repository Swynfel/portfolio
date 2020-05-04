<template>
  <div id="body">
    <Education/>
    <Code/>
    <Experience/>
    <Footer/>
    <section class="section">
    </section>
  </div>
</template>

<script>
import Education from './Education.vue'
import Code from './Code.vue'
import Experience from './Experience.vue'
import Footer from './Footer.vue'

export default {
  name: 'Index',
  components: {
    Education,
    Code,
    Experience,
    Footer,
  }
}
</script>
