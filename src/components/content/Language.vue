<template>
  <b-collapse class="card" animation="slide" aria-id="language"
    :open="name == opened || (opened=='' && startopen)"
    @open="selected">
    <div
        slot="trigger"
        slot-scope="props"
        class="card-header"
        role="button"
        aria-controls="language">
        <p class="card-header-title is-centered">
            <span class="code-name is-pulled-right"> {{ name }} </span> [<b-progress :value="filled" type="is-primary"/>]
        </p>
        <a class="card-header-icon">
            <b-icon
                :icon="props.open ? 'menu-down' : 'menu-up'">
            </b-icon>
        </a>
    </div>
    <div class="card-content">
        <div class="content">
            <progress class="progress" value="15" max="100">15%</progress>
            <slot></slot>
        </div>
    </div>
  </b-collapse>
</template>

<script>
export default {
  props: {
    startopen: {
      type: Boolean,
      default: false,
    },
    name: String,
    filled: Number,
    opened: String,
  },
  methods: {
    selected() {
      this.$emit('selected', this.name)
    }
  }
}
</script>

<style lang="scss">
.code-name {
  width: 100px;
  text-align: right;
  margin-right: 20px;
}
</style>
