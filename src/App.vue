<template>
  <div>
    <link rel="stylesheet" href="https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css">
    <router-view/>
  </div>
</template>

<script>
import "./scss/buefy.scss";

export default {
  name: 'App',/*
  data () {
    return {
      msg: 'yo'
    }
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.msg.split('').reverse().join('')
    }
  }*/
}
</script>
