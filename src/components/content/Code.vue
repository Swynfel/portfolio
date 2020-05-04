<template>
  <section id="code" class="section">
    <div class="container">
      <h1 class="title has-text-centered"><b-icon pack="fas" icon="code" size="is-medium" custom-size="null"/> {{ $t(`coding proficiencies`) }} </h1>

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
          subtitle="Multi-level AI prototype for project KEA"
          >
        </Project>
        <Project :tags="['C#', '*Unity']"
          :selected='selected'
          title="What did you say Captain?"
          subtitle="Text-based space shooter for the Ludum Dare #41"
          img="https://static.jam.vg/raw/b69/1/z/13793.png"
          >
          <t lang="en+jp">
            <p>
              A Text-based space shooter in C# using the Unity game engine. <br/>
              It was made with a friend for the Ludum Dare #41 game jam, a competition where you need to make a game from scratch in 72 hours.
            </p>
            We scored rather high, out of 2018, "What did you say Captain?" arrived:
            <ul>
              <li>148th in Overall</li>
              <li>165th in Innovation</li>
              <li>90th in Theme</li>
            </ul>
            Link to entry: <a>https://ldjam.com/events/ludum-dare/41/what-did-you-say-captain</a>
            Link to source code: <a>https://github.com/AdrienMarcenat/LudumDare41</a>
          </t>
          <t lang="fr">
            <p>
              Un space shooter textuel en C# using le moteur de jeu Unity. <br/>
              Il a été réalisé avec un ami pour le Ludum Dare #41, une compétition où il faut faire un jeu en partant de zero en 72 heures.
            </p>
            Nous avons obtenu un bon score, sur 2018, "What did you say Captain?" est arrivé:
            <ul>
              <li>148ème en Général</li>
              <li>165ème en Innovation</li>
              <li>90ème en Thème</li>
            </ul>
            Lien vers la compétition: <a>https://ldjam.com/events/ludum-dare/41/what-did-you-say-captain</a>
            Lien vers le code source: <a>https://github.com/AdrienMarcenat/LudumDare41</a>
          </t>
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
