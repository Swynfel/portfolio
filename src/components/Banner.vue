<template>
  <section class="hero is-primary is-medium">
    <div class="hero-head">
      <NavBar/>
    </div>

    <div class="hero-body">
      <div class="container has-text-centered">
        <p class="title">
          Hello!
        </p>
        <p class="subtitle">
          I am Quentin Gendre / Swynfel
          {{ clicked }}
        </p>
      </div>
    </div>

    <div class="hero-foot">
      <b-tabs position="is-centered" @input="clickedTab">
          <b-tab-item label="Education"></b-tab-item>
          <b-tab-item label="Experience"></b-tab-item>
          <b-tab-item label="Coding Skills"></b-tab-item>
      </b-tabs>
    </div>
  </section>
</template>

<script>
import NavBar from './NavBar.vue'

export default {
  name: 'Banner',
  components: {
    NavBar
  },
  data () {
    return {
      clicked: -1
    }
  },
  methods: {
      clickedTab: function(index) {
          this.clicked = index
      }
  }
}
</script>

<style lang="scss">
.b-tabs .tab-content {
  padding: 0;
}

.hero.is-primary .tabs li.is-active a {
  color: $primary-light;
}

.hero.is-primary .tabs a:hover {
  opacity: 0.8;
}

.hero.is-primary .tabs a {
  opacity: 0.6;
}
</style>
