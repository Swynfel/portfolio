<template>
  <div id="top">
    <link rel="stylesheet" href="https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css">
    <router-view/>
  </div>
</template>

<script>
const customIconConfig = {
  customIconPacks: {
    'flag-icon': {
      iconPrefix: 'flag-icon-'
    }
  }
}
export default {
  name: 'App',
  created() {
    this.$buefy.config.setOptions(customIconConfig)
  }
}
</script>
