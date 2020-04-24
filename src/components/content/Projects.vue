<template>
  <section class="section">
    <div class="container">
      <h1 class="title has-text-centered"><b-icon pack="fas" icon="code" size="is-medium" custom-size="null"/> Coding proficiencies</h1>

      <br/>

      <div class="buttons is-centered">
        <b-button
          :type="has_all() ? 'is-primary' : 'is-light'"
          @click="toggle_all"
          >All</b-button>
        <b-button
          v-for="language in languages"
          :key="language.name"
          :type="has(language.name) ? 'is-primary' : 'is-light'"
          @click="toggle(language.name)"
          >{{ language.name }}</b-button>
      </div>

      <div class="columns is-multiline">
        <Project :tags="['Python', 'Tensorflow']" :selected="selected"
          title="Master Thesis"
          subtitle="AI for playing the board game Catan using Multiagent RL"
          >
        </Project>
        <Project :tags="['Rust']"
          title="Catan implementation"
          subtitle="Optimised minimal environment for Machine Learning"
          >
        </Project>
        <Project :tags="['C++', 'C#', 'Unreal Engine']"
          title="Internship @Optimystic Labs"
          subtitle="Multilayer AI prototype for project KEA">
        </Project>
        <Project :tags="['C#', 'Unity']"
          title="What did you say Captain?"
          subtitle="Text-based space shooter for the Ludum Dare #45">
        </Project>
        <Project :tags="['HTML/CSS', 'Python', 'Django']"
          title="Website for RRX event"
          subtitle="Registration and group finding for large tabletop role playing event">
        </Project>
        <Project :tags="['HTML/CSS', 'JavaScript', 'Vue']"
          title="This very website"
          subtitle="Made with the frameworks Vue (JavaScript) and Bulma (CSS)">
        </Project>
      </div>
    </div>
  </section>
</template>

<script>
  import Project from './Project'
  export default {
    components: {
      Project,
    },
    data() {
      const languages = [{
          name: "C#",
          stars: 3,
        },{
          name: "Python",
          stars: 3,
        },{
          name: "C++",
          stars: 2,
        },{
          name: "Rust",
          stars: 1,
        },{
          name: "HTML/CSS",
          stars: 1,
        },
      ];
      return {
        languages: languages,
        selected: languages.map((l)=>l.name),
      }
    },
    methods: {
      has(name) {
        return this.selected.includes(name);
      },
      has_all() {
        return this.selected.length == this.languages.length;
      },
      toggle(name) {
        const index = this.selected.indexOf(name);
        if (index > -1) {
          this.selected.splice(index, 1);
        } else {
          this.selected.push(name);
        }
      },
      toggle_all() {
        if (this.has_all()) {
          this.selected = [];
        } else {
          this.selected = this.languages.map((l)=>l.name);
        }
      }
    }
  }
</script>
