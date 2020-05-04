<template>
  <div class="column is-half-tablet is-half-desktop is-one-third-widescreen" :style="show() ? '' : 'display: none;'">
    <a v-on:click="opened = true">
      <div class="card project-card has-ribbon-left">
        <div class="ribbon">
          <b-taglist>
            <b-tag v-for="(tag, index) in tags" :key="index" :type="tag_primary(tag) ? 'is-primary' : 'is-info'" :style="tag_primary(tag) ? 'font-weight: bold;' : ''">{{ tag_name(tag) }}</b-tag>
          </b-taglist>
        </div>
        <div class="card-image">
          <figure class="image is-3by2">
            <img :src='img' :alt='title+" image"'>
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
    </a>
    <b-modal :active.sync="opened" :width="640" scroll="keep">
      <div class="card">
        <div class="card-image">
          <figure class="image is-3by2">
            <img class="image-cover" :src='img' :alt='title+" image"'>
          </figure>
        </div>
        <div class="card-content">
          <div class="media-content">
            <p class="title is-4">
              {{ title }}
            </p>
          </div>
          <div class="middle-content">
            <b-taglist>
              <b-tag v-for="(tag, index) in tags" :key="index" :type="tag_primary(tag) ? 'is-primary' : 'is-info'" :style="tag_primary(tag) ? 'font-weight: bold;' : ''">{{ tag_name(tag) }}</b-tag>
            </b-taglist>
          </div>
          <div class="content">
            <slot>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris.
            </slot>
          </div>
        </div>
      </div>
    </b-modal>
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
      type: String,
      default: function() { return ''; },
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
  data () {
    return { opened: false }
  },
  methods: {
    show() {
      return this.selected === '' || this.tags.includes(this.selected)
    },
    tag_primary(tag) {
      return tag.charAt(0) !== '*'; //this.selected.includes(tag);
    },
    tag_name(tag) {
      if(this.tag_primary(tag)) {
        return tag;
      } else {
        return tag.substr(1);
      }
    }
  }
}
</script>

<style lang="scss">
img.image-cover {
  object-fit: cover;
}

.card .middle-content {
  margin-bottom: 1em;
  margin-top: 0.4em;
}

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
    min-height: 7.2em;
    overflow: hidden;

    .title {
      font-stretch: condensed;
    }
  }
}

ul ::marker {
    color: $teal;
}
</style>
