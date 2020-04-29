<template>
  <b-navbar fixed-top=true>
    <!--b-navbar-item tag="router-link" :to="{ path: '/' }">
      <h1>Swynfel</h1>
    </b-navbar-item>
    <b-navbar-item tag="router-link" :to="{ path: '/about' }">
        About
    </b-navbar-item>
    <b-navbar-item tag="router-link" :to="{ path: '/contact' }">
        Contact
    </b-navbar-item-->
    <template slot="brand">
      <b-navbar-item href="#">
        <h1>Swynfel</h1>
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item href="#education">
        Education
      </b-navbar-item>
      <b-navbar-item href="#projects">
        Projects
      </b-navbar-item>
      <b-navbar-item href="#contact">
        Contact
      </b-navbar-item>
    </template>
  </b-navbar>
</template>


<script>
export default {
  name: 'NavBar'
}
</script>

<style lang="scss" scoped>
h1 {
  font-weight: bold;
}
.navbar {
  background-color: $teal;
}
</style>
