<template>
  <span>
    <b-icon icon="link" size="is-small"/> <slot>{{ name }}</slot>:
    <a :href="fullUrl" target="_blank">{{ url }}</a>
  </span>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: () => ''
    },
    url: {
      type: String,
      default: () => ''
    },
    unsecure: {
      type: Boolean,
      default: () => false
    }
  },
  computed: {
    fullUrl() {
      if (this.unsecure) {
        return 'http://'+this.url
      }
      return 'https://'+this.url
    }
  }
}
</script>
