<template>
  <div v-if="show()">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    lang: {
      type: String,
      default: function() { return ''; },
    },
  },
  methods: {
    show() {
      return this.lang.indexOf(this.$i18n.locale) !== -1
    }
  }
}
</script>
