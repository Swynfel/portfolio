<template>
  <section id="code" class="section">
    <div class="container">
      <h1 class="title has-text-centered"><b-icon pack="fas" icon="code" size="is-medium" custom-size="null"/> {{ $t(`coding proficiencies`) }} </h1>

      <br/>

      <div class="buttons is-centered">
        <b-button
          :type="selected=='' ? 'is-primary' : 'is-info' "
          @click="select('')"
          > {{ $t(`all`) }}</b-button>
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

          :title="$T({
              en:`Master Thesis`,
              fr:`Thèse de Master`,
              jp:`修士論文`,
          })"
          :subtitle="$T({
              en:`AI for playing the board game Catan using Multi-agent RL`,
              fr:`IA pour jouer au jeu de plateau Catane par RL Multi-agent`,
          })"
          img="/master-thesis.jpg"
          >
          <T lang="en+jp">
            <p>
              Made AIs using Reinforcement Learning to play board games (especially Catan).
            </p>
            <p>
              Published a first paper titled "Counterfactual Regret Minimisation for playing the multiplayer bluffing dice game Dudo" <br/>
              <IconLink name="Paper" url="id.nii.ac.jp/1001/00199900/" unsecure/> <br/>
            </p>
            <p>
              Currently focusing on the board game Catan, a 4-player strategical game with incomplete information, randomness, and a complexe hexagonal-based board. <br/>
              I'm looking for ways to play the game using only Deep Reinforcement Learning.
            </p>
          </T>

          <T lang="fr">
            <p>
              Développement d'IAs utilisant du Reinforcement Learning pour jouer à des jeux de plateau (particulièrement Catane).
            </p>
            <p>
              J'ai publié un premier article intitulé "Counterfactual Regret Minimisation for playing the multiplayer bluffing dice game Dudo", soit "Minimisation de regret contrefactuel pour jouer à Dudo, jeu multijoueur de bluff aux dés" <br/>
              <IconLink name="Article" url="id.nii.ac.jp/1001/00199900/" unsecure/> <br/>
            </p>
            <p>
              Je me concentre actuellement sur Catane, jeu de plateau stratégique à 4 joueurs avec de l'information incomplète, de l'aléatoire, et un plateau hexagonal complexe. <br/>
              Je recherche comment créer un agent intelligent en utilisant seulement du Deep Reinforcement Learning.
            </p>
          </T>
        </Project>


        <Project :tags="['C#', '*Godot']"
          :selected='selected'

          :title="$T({
              en:`Wireless Sun project`,
              fr:`Projet Wireless Sun`,
              jp:`WirelessSunプロジェクト`,
          })"
          :subtitle="$T({
              en:`RPG game with procedural generation`,
              fr:`Jeu RPG avec de la génération procédurale`,
          })"
          img="/wireless-sun.png"
          >
          <T lang="en+jp">
            <p>
              An action and exploration RPG vidéo game project, with procedural generation and local multiplayer, developed with a friend in our free time.
              The game is made in C#, using the open source game engine Godot.
            </p>
            <p>
              <IconLink name="Source code" url="github.com/UselessTeam/wireless-sun" unsecure/> <br/>
              <IconLink name="Build (alpha 0.3)" url="github.com/UselessTeam/wireless-sun/releases" unsecure/> <br/>
            </p>
          </T>

          <T lang="fr">
            <p>
              Un projet de jeu vidéo RPG d'action et d'exploration, avec de la génération procédurale et du multijoueur local, fait avec un ami pendant notre temps libre.
              Nous développons en C#, avec le moteur de jeu open source Godot.
            </p>
            <p>
              <IconLink name="Code source" url="github.com/UselessTeam/wireless-sun" unsecure/> <br/>
              <IconLink name="Éxecutable (alpha 0.3)" url="github.com/UselessTeam/wireless-sun/releases" unsecure/> <br/>
            </p>
          </T>
        </Project>


        <Project :tags="['Rust']"
          :selected='selected'
          :title="$T({
              en:`Catan implementation`,
              fr:`Implémentation de Catane`,
              jp:`カタンの実装`,
          })"
          :subtitle="$T({
              en:`Python module containing minimal environment for Machine Learning`,
              fr:`Module Python minimaliste pour de l'apprentissage machine sur Catane`,
          })"
          img="/rustcatan.png"
          >
          <T lang="en+jp">
            <p>
              A implementation of the board game Catan in Rust, with bindings to turn it into a Python module using PyO3.
            </p>
            <p>
              The environment supports multithreading and can run without server nor display.
              Being optimised and minimal, it is useful for Machine Learning research.
            </p>
            <IconLink name="Source code (will be public after publication)" url="github.com/swynfel/rust-catan"/> <br/>
          </T>
          <T lang="fr">
            <p>
              Une implémentation du jeu de plateau Catane en Rust, avec des bindings pour en faire un module Python à l'aide de PyO3.
            </p>
            <p>
              L'environnement supporte le multi-threading et peut tourner sans serveur ni affichage.
              Étant optimisé et minimal, il est très utile pour la recherche en Machine Learning.
            </p>
            <IconLink name="Code source (sera public après publication)" url="github.com/swynfel/rust-catan"/> <br/>
          </T>
        </Project>


        <Project :tags="['C++', 'C#', '*Unreal Engine']"
          :selected='selected'
          :title="$T({
              en:`Internship @Optimystic Labs`,
              fr:`Stage chez Optimystic Labs`,
              jp:`OptymisticLabsのインターンシップ`,
          })"
          :subtitle="$T({
              en:`Multi-level AI prototype for project KEA`,
              fr:`Prototype d'IA multi-niveau pour le projet KEA`,
          })"
          img="/kea.jpg"
          >
          <T lang="en+jp">
            <p>
              6 month internship at Optimystic Labs / Stormancer as a R&D AI developer.
            </p>
            <p>
              I defined the architecture and implemented a multi-layered AI prototype for project KEA, a cooperative player-vs-computer <b-tooltip label="Multiplayer Online Battle Arena: A genre combining real-time strategy with action-rpg elements" multilined dashed>moba</b-tooltip>-like project of the startup Stormancer.
            </p>
            <IconLink name="Project" url="optimysticlabs.com"/> <br/>
            <IconLink name="Company" url="www.stormancer.com"/> <br/>
          </T>
          <T lang="fr">
            <p>
              Stage de 6 mois chez Optimystic Labs / Stormancer en tant que développeur IA en R&D.
            </p>
            <p>
              J'ai définis l'architecture et implémenté un prototype d'IA multi-niveau pour le projet KEA, un projet de jeu vidéo type-<b-tooltip label="Multiplayer Online Battle Arena: Un genre associant stratégie en temps réelle à des éléments de jeu de role" multilined dashed>moba</b-tooltip> joueur-contre-ordinateur coopératif de la startup Stormancer.
            </p>
            <IconLink name="Projet" url="optimysticlabs.com"/> <br/>
            <IconLink name="Entreprise" url="www.stormancer.com"/> <br/>
          </T>
        </Project>


        <Project :tags="['C#', '*Unity']"
          :selected='selected'
          title="What did you say Captain?"
          :subtitle="$T({
              en:`Text-based space shooter for the 41th Ludum Dare`,
              fr:`Space shooter textuel pour le 41e Ludum Dare`,
          })"
          img="https://static.jam.vg/raw/b69/1/z/13793.png"
          >
          <T lang="en+jp">
            <p>
              A Text-based space shooter in C# using the Unity game engine. <br/>
              It was made with a friend for the 41st Ludum Dare game jam, a competition where you need to make a game from scratch in 72 hours.
            </p>
            We scored rather high, out of 2018 participants, "What did you say Captain?" arrived:
            <ul>
              <li>148th in Overall</li>
              <li>165th in Innovation</li>
              <li>90th in Theme</li>
            </ul>
            <IconLink name="Entry" url="ldjam.com/events/ludum-dare/41/what-did-you-say-captain"/> <br/>
            <IconLink name="Source code" url="github.com/AdrienMarcenat/LudumDare41"/>
          </T>
          <T lang="fr">
            <p>
              Un space shooter textuel en C# utilisant le moteur de jeu Unity. <br/>
              Il a été réalisé avec un ami pour le 41e Ludum Dare, une compétition où il faut faire un jeu en 72 heures en partant de zéro.
            </p>
            Nous avons obtenu un bon score, sur 2018 participants, "What did you say Captain?" est arrivé:
            <ul>
              <li>148ème en Général</li>
              <li>165ème en Innovation</li>
              <li>90ème en Thème</li>
            </ul>
            <IconLink name="Compétition" url="ldjam.com/events/ludum-dare/41/what-did-you-say-captain"/> <br/>
            <IconLink name="Code source" url="github.com/AdrienMarcenat/LudumDare41"/>
          </T>
        </Project>

        <Project :tags="['C#', '*Unity']"
          :selected='selected'
          :title="$T({
              en:`7 Ludum Dare participations`,
              fr:`7 Ludum Dare`,
              jp:`７回LudumDareの参加`,
          })"
          :subtitle="$T({
              en:`Multiple participations in game jams since 2015`,
              fr:`Nombreuses participations à des game jams depuis 2015`,
          })"
          img="/blobs.jpg"
          >
          <T lang="en+jp">
            <p>
              Participated in multiple Ludum Dare game jams (game making competitions over a weekend), and finished successfully 7 of them. <br/>
              I took part under many different conditions, occupying various roles: from alone to a 5 player team, and from sole developer to partial developer with sound-design, level-design and/or graphism responsabilities.
            </p>
            <p>
              My best "compo" submission, making a game alone in 48h, was "Blobs" for the 35th Ludum Dare. Out of 1117 participants, I scored:
              <ul>
                <li>155th in Overall</li>
                <li>130th in Fun</li>
                <li>91th in Theme</li>
              </ul>
              <IconLink name="Entry" url="ludumdare.com/compo/ludum-dare-35/?uid=46010"/>
            </p>
            <p>
              My best "jam" submission, making a game in a team in 72h, was "What did you say Captain?" for the 41th Ludum Dare. It has already been described <a>here</a>.
            </p>
            <p>
              <IconLink url="ldjam.com/users/swynfel/games">Participations (<b-tooltip label="The Ludum Dare website migrated in 2017" dashed>5 most recent only</b-tooltip>)</IconLink>
            </p>
          </T>
          <T lang="fr">
            <p>
              J'ai participé à de nombreuses "game jams" Ludum Dare (compétition de programmation de jeu sur un weekend), et j'ai terminé 7 jeux. <br/>
              J'ai occupé de multiples postes dans des conditions variés: allant de seul à en équipe de 5, de seul développeur à développeur partiel avec des responsabilités de sound-designer, level-designer et/ou graphiste.
            </p>
            <p>
              Ma meilleure participation de type "compo", où il faut faire un jeu seul en 48h, a été "Blobs" pour le 35e Ludum Dare. Sur 1117 participants, je suis arrivé:
              <ul>
                <li>155ème en Général</li>
                <li>130ème en Fun</li>
                <li>91ème en Thème</li>
              </ul>
              <IconLink name="Entry" url="ludumdare.com/compo/ludum-dare-35/?action=preview&uid=46010"/>
            </p>
            <p>
                Ma meilleure participation de type "jam", où il faut faire un jeu en équipe en 72h, a été "What did you say Captain?" pour le 41e Ludum Dare. Je l'ai déjà mentionné <a>ici</a>.
            </p>
            <p>
              <IconLink url="ldjam.com/users/swynfel/games">Participations (<b-tooltip label="Le site web du Ludum Dare a été migré en 2017" dashed>5 dernières seulement</b-tooltip>)</IconLink>
            </p>
          </T>
        </Project>

        <Project :tags="['HTML/CSS', 'Python', '*Django']"
          :selected='selected'
          :title="$T({
              en:`Website for the RRX event`,
              fr:`Site web des RRX`,
              jp:`RRXのウェッブサイト`,
          })"
          :subtitle="$T({
              en:`Registration and group finding for a large tabletop role playing event`,
              fr:`Inscription et recherche de groupes pour un événement de jeu de rôle`,
          })"
          img="/faerix.jpg"
          >
          <T lang="en+jp">
            <p>
              The website of a tabletop role playing event organised by "Faërix", a school club of École Polytechnique.
            </p>
            <p>
              It handles registration and group finding for about 300 persons each year.
              The website uses Django, a Python framework, as backend. The frontend uses Django's templating system combined with the CSS framework Bootstrap.
            </p>
            <p>
              Main contributor while at school, I continue to help maintaining it.
            </p>
            <IconLink name="Website" url="www.faerix.net"/> <br/>
            <IconLink url="github.com/Faerix/faerix-website"> Source code (<b-tooltip label="the current source code has been closed for security reasons" multilined dashed>outdated</b-tooltip>) </IconLink><br/>
          </T>
          <T lang="fr">
            <p>
              Le site web des "Rencontres Rôlistes de l'X", un événement de jeu de rôle papier organisé par "Faërix", un club de l'École polytechnique.
            </p>
            <p>
              Ce site s'occupe des inscriptions et de la recherche de groupes pour environ 300 personnes chaque année.
              Le site utilise Django, un framework Python, comme backend. Le frontend utilise le system de template Django combiné au framework CSS Bootstrap.
            </p>
            <p>
              Contributeur principal pendant l'école, je continue à aider à le maintenir.
            </p>
            <IconLink name="Site" url="www.faerix.net"/> <br/>
            <IconLink url="github.com/Faerix/faerix-website"> Code source (<b-tooltip label="le code source actuel est devenu privé pour des raisons de sécurité" multilined dashed>obsolète</b-tooltip>) </IconLink><br/>
          </T>
        </Project>


        <Project :tags="['HTML/CSS', 'JavaScript', '*Vue']"
          :selected='selected'
          :title="$T({
              en:`This very website`,
              fr:`Ce site même`,
              jp:`このウェッブサイト`,
          })"
          :subtitle="$T({
              en:`Made with the frameworks Vue (JavaScript) and Bulma (CSS)`,
              fr:`Fait avec les frameworks Vue (JavaScript) et Bulma (CSS)`,
          })"
          img="/website.png"
          >
          <T lang="en+jp">
            My portfolio website. A single page application made with
            <ul>
              <li>Vue - a JavaScript Framework</li>
              <li>Bulma - a CSS Framework</li>
              <li>Buefy - a framework offering Vue bindings for Bulma components</li>
            </ul>
            <IconLink name="Website" url="swynfel.github.io"/> <br/>
            <IconLink name="Source code" url="github.com/swynfel/portfolio"/> <br/>
          </T>
          <T lang="fr">
            Mon site portfolio. Une application web monopage faite avec
            <ul>
              <li>Vue - un framework JavaScript</li>
              <li>Bulma - un framework CSS</li>
              <li>Buefy - un framework offrant une liaison Vue de composants Bulma</li>
            </ul>
            <IconLink name="Site" url="swynfel.github.io"/> <br/>
            <IconLink name="Code source" url="github.com/swynfel/portfolio"/> <br/>
          </T>
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
