<template>
  <section class="section">
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
          <h4 class="title is-4">University of Tokyo - Japan</h4>
          <h5 class="subtitle is-5">2018-2020 (expected) Master of Applied Computer Science</h5>
          Developped an AI to play the board game Catan with Deep Reinforcement Learning
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
          <h4 class="title is-4">École Polytechnique - France</h4>
          <h5 class="subtitle is-5">2015-2018 Diplôme d'Ingénieur Polytechnicien (Equivalent to Master of Science)</h5>
          Learned the theoretical foundations of Pure and Applied Mathematics, Physics, Economy and Computer Science
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
