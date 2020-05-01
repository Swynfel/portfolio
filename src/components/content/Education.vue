<template>
  <section id="education" class="section">
    <div class="container">
      <h1 class="title has-text-centered"><b-icon pack="fas" icon="graduation-cap" size="is-medium" custom-size="null"/> Education</h1>

      <br/>

      <div class="columns is-centered is-vcentered">
        <div class="column is-centered is-narrow is-flex has-centered-content">
          <figure class="image is-128x128 is-centered">
            <img class="is-rounded" src="/utokyo_logo.png">
          </figure>
        </div>
        <div class="column is-8">
          <h4 class="title is-4">{{ $t( `utokyo-title` ) }}</h4>
          <h5 class="subtitle is-5">{{ $t( `utokyo-subtitle` ) }}</h5>
          {{ $t( `utokyo-comment` ) }}
        </div>
      </div>

      <br/>

      <div class="columns is-centered is-vcentered">
        <div class="column is-centered is-narrow is-flex has-centered-content">
          <figure class="is-rounded image is-128x128">
            <img class="is-rounded polytechnique-logo"/>
          </figure>
        </div>
        <div class="column is-8">
          <h4 class="title is-4">{{ $t( `x-title` ) }}</h4>
          <h5 class="subtitle is-5">{{ $t( `x-subtitle` ) }}</h5>
          {{ $t( `x-comment` ) }}
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.polytechnique-logo {
  height: 100%;
  width: 100%;
  background-color: #003a56;
  background-image: url(/polytechnique_logo.png);
  background-repeat: no-repeat;
  background-size: auto 75%;
  background-position: 55% 60%;
}
</style>
