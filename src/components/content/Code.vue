<template>
  <section id="code" class="section">
    <div class="container">
      <h1 class="title has-text-centered"><b-icon pack="fas" icon="code" size="is-medium" custom-size="null"/> Coding proficiencies</h1>

      <br/>

      <div class="buttons is-centered">
        <b-button
          :type="selected=='' ? 'is-primary' : 'is-info' "
          @click="select('')"
          >All</b-button>
        <b-button
          v-for="language in languages"
          :key="language.name"
          :type="selected==language.name ? 'is-primary' : 'is-info'"
          @click="select(language.name)"
          >{{ language.name }}</b-button>
      </div>

      <div class="columns is-multiline">
        <Project :tags="['Python', '*Tensorflow']"
          :selected='selected'
          title="Master Thesis"
          subtitle="AI for playing the board game Catan using Multiagent RL"
          >
        </Project>
        <Project :tags="['Rust']"
          :selected='selected'
          title="Catan implementation"
          subtitle="Python module containing minimal environment for Machine Learning"
          img="/rustcatan.jpg"
          >
        </Project>
        <Project :tags="['C++', 'C#', '*Unreal Engine']"
          :selected='selected'
          title="Internship @Optimystic Labs"
          subtitle="Multilayer AI prototype for project KEA"
          >
        </Project>
        <Project :tags="['C#', '*Unity']"
          :selected='selected'
          title="What did you say Captain?"
          subtitle="Text-based space shooter for the Ludum Dare #45"
          img="https://static.jam.vg/raw/b69/1/z/13793.png"
          >
        </Project>
        <Project :tags="['HTML/CSS', 'Python', '*Django']"
          :selected='selected'
          title="Website for RRX event"
          subtitle="Registration and group finding for large tabletop role playing event"
          img="/faerix.jpg"
          >
        </Project>
        <Project :tags="['HTML/CSS', 'JavaScript', '*Vue']"
          :selected='selected'
          title="This very website"
          subtitle="Made with Vue (JavaScript) and Bulma (CSS) frameworks"
          img="/website.jpg"
          >
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
        selected: '',
      }
    },
    methods: {
      select(name) {
        this.selected = name
      },
    }
  }
</script>
