<template>
  <section class="hero is-primary is-medium">
    <div class="hero-head">
      <NavBar/>
    </div>

    <div class="hero-body">
      <div class="container has-text-centered">
        <h4 class="subtitle is4">
          {{ $t(`hello`) }}! I am <b class="title is-3">Quentin Gendre</b> aka <b class="title is-3">Swynfel</b>,
        </h4>
        <div class="columns is-centered is-size-5" style="padding-left: 1em; padding-right: 1em;">
          <div class="column is-narrow is-flex has-centered-content" style="padding-bottom: 0;">
            I like
          </div>
          <div class="column is-centered is-10-mobile is-4-desktop is-5-tablet is-offset-0-tablet is-offset-1-mobile">
            <ul class="has-text-left">
              <li><b-icon icon="gamepad" type="is-info"/> Developping video games</li>
              <li><b-icon icon="brain" type="is-info"/> Artificial intelligence</li>
              <li><b-icon pack="fab" icon="osi" type="is-info"/> Open source software</li>
              <li><b-icon icon="cupcake" type="is-info"/> Baking cakes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!--div class="hero-foot">
      <b-tabs position="is-centered" @input="clickedTab">
          <b-tab-item label="Education"></b-tab-item>
          <b-tab-item label="Experience"></b-tab-item>
          <b-tab-item label="Coding Skills"></b-tab-item>
      </b-tabs>
    </div-->
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
<!--
<style lang="scss" scoped>
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
-->
