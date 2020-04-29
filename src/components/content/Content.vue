<template>
  <div id="body">
    <Education/>
    <Projects/>
    <Footer/>
    <section class="section">
    </section>
  </div>
</template>

<script>
import Education from './Education.vue'
import Projects from './Projects.vue'
import Footer from './Footer.vue'

export default {
  name: 'Index',
  components: {
    Education,
    Projects,
    Footer,
  }
}
</script>
