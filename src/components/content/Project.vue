<template>
  <div class="column is-half-tablet is-half-desktop is-one-third-widescreen" :style="show() ? '' : 'display: none;'">
    <div class="card project-card has-ribbon-left">
      <div class="ribbon">
        <b-taglist>
          <b-tag type="is-primary" v-for="(tag, index) in tags" :key="index">{{ tag }}</b-tag>
        </b-taglist>
      </div>
      <div class="card-image">
        <figure class="image is-3by2">
          <img :src='img' alt="Project image">
        </figure>
      </div>
      <div class="card-content">
        <p class="title is-4">
          {{ title }}
        </p>
        <p class="subtitle is-5">
          {{ subtitle }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      default: function() { return []; },
    },
    selected: {
      type: Array,
      default: function() { return this.tags; },
    },
    img: {
      type: String,
      default: "https://bulma.io/images/placeholders/1280x960.png",
    },
    title: {
      type: String,
      default: "TITLE"
    },
    subtitle: {
      type: String,
      default: "SUBTITLE"
    },
  },
  methods: {
    show() {
      return true;
    }
  }
}
</script>

<style lang="scss">
.project-card {
  .card-image {
    .image {
      img {
        object-fit: cover;
      }
    }
  }

  .card-content {
    padding: 1em;
    height: 7.2em;
    overflow: hidden;

    .title {
      font-stretch: condensed;
    }
  }
}
</style>
