<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Code</h1>
      <h2 class="subtitle">
        Programming language I'm proficient in, and corresponding example projects
      </h2>

      <b-collapse
          class="card"
          animation="slide"
          v-for="(collapse, index) of collapses"
          :key="index"
          :open="isOpen == index"
          @open="isOpen = index">
          <div
              slot="trigger"
              slot-scope="props"
              class="card-header"
              role="button">
              <p class="card-header-title is-centered">
                  <span class="code-name is-pulled-right"> {{ collapse.title }} </span> <b-progress :value="collapse.filled"></b-progress>
              </p>
              <a class="card-header-icon">
                  <b-icon
                      :icon="props.open ? 'menu-down' : 'menu-up'">
                  </b-icon>
              </a>
          </div>
          <div class="card-content">
              <div class="content">
                  {{ collapse.text }}
              </div>
          </div>
      </b-collapse>

      <!-- b-tabs size="is-medium" type="is-boxed" vertical>
        <b-tab-item label="C#">
          <template slot="header">
            <div class="code-name"> C# </div> <b-progress :value="100"></b-progress>
          </template>
          <div class="tab-pad">
            Nice C# is good C#
          </div>
        </b-tab-item>

        <b-tab-item label="Python">
          <template slot="header">
            <div class="code-name"> Python </div> <b-progress :value="100"></b-progress>
          </template>
          <div class="tab-pad">
            Python !!!
          </div>
        </b-tab-item>

        <b-tab-item label="Rust">
          <template slot="header">
            <div class="code-name"> Rust </div> <b-progress :value="35"></b-progress>
          </template>
          <div class="tab-pad">
            Rusty
          </div>
        </b-tab-item>

        <b-tab-item label="Web">
          <template slot="header">
            <div class="code-name"> Web </div> <b-progress :value="35"></b-progress>
          </template>
          <div class="tab-pad">
            HTML/CSS/Javascript
          </div>
        </b-tab-item>
      </b-tabs -->
    </div>
  </section>
</template>

<script>
    export default {
        data() {
            return {
                isOpen: 0,
                collapses: [
                {
                    title: 'C#',
                    filled: 100,
                    text: 'C# is good'
                },
                {
                    title: 'Python',
                    filled: 100,
                    text: 'print(stuff)'
                },
                {
                    title: 'Rust',
                    filled: 35,
                    text: 'Rusty'
                },
                {
                    title: 'HTML/CSS/JS',
                    filled: 35,
                    text: 'Web'
                }
                ]
            }
        }
    }
</script>

<style lang="scss">
.tab-pad {
  padding: 16px;
}

.code-name {
  width: 160px;
  text-align: right;
  margin-right: 24px;
}
</style>
