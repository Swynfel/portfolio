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
          <t lang="en+fr+jp">
            <p>
              Made AIs using Reinforcement Learning to play board games (especially Catan).
            </p>
            <p>
              Published a small paper called "Counterfactual Regret Minimisation for playing the multiplayer bluffing dice game Dudo" <br/>
              <IconLink name="Paper" url="id.nii.ac.jp/1001/00199900/" unsecure/> <br/>
            </p>
            <p>
              Currently focusing on the board game Catan, a 4-player strategical game with incomplete information, randomness, and a complexe hexagonal-based board. <br/>
              I'm looking for ways to play the game using only Deep Reinforcement Learning.
            </p>
          </t>
        </Project>


        <Project :tags="['Rust']"
          :selected='selected'
          title="Catan implementation"
          subtitle="Python module containing minimal environment for Machine Learning"
          img="/rustcatan.jpg"
          >
          <t lang="en+fr+jp">
            <p>
              A implementation of the board game Catan in Rust, and bindings to turn it into a Python module using pyo3.
            </p>
            <p>
              The environment supports multithreading and can run without server nor display.
              Being optimised and minimal, it is useful for Machine Learning research.
            </p>
            <IconLink name="Source code" url="github.com/swynfel/rust-catan"/> <br/>
          </t>
        </Project>


        <Project :tags="['C++', 'C#', '*Unreal Engine']"
          :selected='selected'
          title="Internship @Optimystic Labs"
          subtitle="Multi-level AI prototype for project KEA"
          >
          <t lang="en+fr+jp">
            <p>
              6 month internship at Optimystic Labs / Stormancer as a R&D AI developper.
            </p>
            <p>
              I defined the architecture and implemented a multi-layered AI prototype for project KEA, a cooperative player-vs-computer <b-tooltip label="Multiplayer online battle arena: A genre combining real-time strategy with action-rpg elements" multilined dashed>moba</b-tooltip>-like project of the startup Stormancer.
            </p>
            <IconLink name="Project" url="optimysticlabs.com"/> <br/>
            <IconLink name="Company" url="www.stormancer.com"/> <br/>
          </t>
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
            <IconLink name="Entry" url="ldjam.com/events/ludum-dare/41/what-did-you-say-captain"/> <br/>
            <IconLink name="Source code" url="github.com/AdrienMarcenat/LudumDare41"/>
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
            <IconLink name="Compétition" url="ldjam.com/events/ludum-dare/41/what-did-you-say-captain"/> <br/>
            <IconLink name="Code source" url="github.com/AdrienMarcenat/LudumDare41"/>
          </t>
        </Project>


        <Project :tags="['HTML/CSS', 'Python', '*Django']"
          :selected='selected'
          title="Website for RRX event"
          subtitle="Registration and group finding for large tabletop role playing event"
          img="/faerix.jpg"
          >
          <t lang="en+fr+jp">
            <p>
              The website of a tabletop role playing event organised by "Faërix", a school club of École Polytechnique.
            </p>
            <p>
              It handles registration and group finding for about 300 persons each year.
              The website uses Django, a python framework, as backend. The frontend uses Django's templating system combined with Bootstrap.
            </p>
            <p>
              Main contributor while at school, I continue to help maintaining it.
            </p>
            <IconLink name="Website" url="www.faerix.net"/> <br/>
            <IconLink url="github.com/Faerix/faerix-website"> Source code (<b-tooltip label="The current source code has been closed for security reasons" multilined dashed>outdated</b-tooltip>) </IconLink><br/>
          </t>
        </Project>


        <Project :tags="['HTML/CSS', 'JavaScript', '*Vue']"
          :selected='selected'
          title="This very website"
          subtitle="Made with Vue (JavaScript) and Bulma (CSS) frameworks"
          img="/website.jpg"
          >
          <t lang="en+fr+jp">
            My portfolio website. I was made with
            <ul>
              <li>Vue - a JavaScript Framework</li>
              <li>Bulma - a CSS Framework</li>
              <li>Buefy - a framework offering Vue bindings for Bulma components</li>
            </ul>
            <IconLink name="Website" url="swynfel.github.io"/> <br/>
            <IconLink name="Source code" url="github.com/swynfel/portfolio"/> <br/>
          </t>
        </Project>
      </div>
    </div>
  </section>
</template>

<script>
  import Project from './Project.vue'
  import IconLink from './IconLink.vue'
  export default {
    components: {
      Project,
      IconLink,
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
