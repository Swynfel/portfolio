<template>
  <section id="experience" class="section">
    <div class="container">
      <h1 class="title has-text-centered"><b-icon pack="fas" icon="globe" size="is-medium" custom-size="null"/> {{ $t(`international experience`) }}</h1>

      <br/>

      <b-table :data='data'>
        <template slot-scope="props">
          <b-table-column field="period" width=160 :label="$t(`period`)" centered>
            <div v-if="!isCard">
              {{ props.row.period }}
              <br/>
              <small>{{ props.row.from }} - {{ props.row.to }}</small>
            </div>
            <div v-if="isCard">
              {{ props.row.period }} ({{ props.row.from }} - {{ props.row.to }})
            </div>
          </b-table-column>
          <b-table-column field="description" :label="$t(`description`)">
            {{ props.row.description }}
          </b-table-column>
          <b-table-column field="at" width=170 :label="$t(`at`)">
            {{ props.row.at }}
            <br v-if="!isCard"/>
            {{ props.row.at2 }}
          </b-table-column>
          <b-table-column field="location" width=120 :label="$t(`location`)">
            <div>
              {{ props.row.city }},
              <br v-if="!isCard"/>
              <b-icon :icon='props.row.flag' pack="flag-icon" custom-size="is-size-5"/> {{ props.row.country }}
            </div>
          </b-table-column>
        </template>
      </b-table>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return { 'innerWidth': window.innerWidth }
    },
    computed: {
      data() {
        const lang = this.$i18n.locale;
        if (lang == 'fr') {
          return [
            { 'period': '2 ans', 'from': 'Sep 2018', 'to': 'Aoû 2020',
              'description': "Master d'Informatique Appliqué - A réalisé de la recherche en Deep Reinforcement Learning pour faire des IA de jeu de plateau",
              'at': 'GSII,', 'at2': 'Université de Tokyo', 'city': 'Tokyo', 'flag': 'jp', 'country': 'Japon'},
            { 'period': '6 mois', 'from': 'Avr 2018', 'to': 'Aoû 2018',
              'description': "Stage de developper AI en R&D - A definie l'architecture et a implémenté un prototype d'IA multi-niveau pour une startup de jeux vidéo",
              'at': 'Optimystic Labs,', 'at2': 'Stormancer', 'city': 'Tourcoing', 'flag': 'fr', 'country': 'France'},
            { 'period': '3 mois', 'from': 'Juin 2017', 'to': 'Aoû 2017',
              'description': "Stage de développeur software - A implémenté des tests unitaires et a amélioré les fontionnalités d'un module de prévision de cashflow",
              'at': 'eFront', 'city': 'Belgrade', 'flag': 'rs', 'country': 'Serbie' },
            { 'period': '6 mois', 'from': 'Nov 2015', 'to': 'Avr 2015',
              'description': "Stage d'assitant de professeur - A donné des cours de soutient et a aidé les professeurs pendant les travaux pratiques",
              'at': 'SJTU-ParisTech,','at2': 'Shanghai JiaoTong', 'city': 'Shanghai', 'flag': 'cn', 'country': 'Chine' },
            { 'period': '4 ans', 'from': 'Sep 2005', 'to': 'Aug 2009',
              'description': "A vécu et étudié à l'étranger pendant l'enfance",
              'city': 'Göteborg', 'flag': 'se', 'country': 'Suède' },
          ]
        } else {
          // 'en' or default
          return [
            { 'period': '2 years', 'from': 'Sep 2018', 'to': 'Aug 2020',
              'description': "Master degree of Applied Computer Science - Conducted Deep Reinforcement Learning research for making AIs for board games",
              'at': 'GSII,', 'at2': 'University of Tokyo', 'city': 'Tokyo', 'flag': 'jp', 'country': 'Japan'},
            { 'period': '6 months', 'from': 'Apr 2018', 'to': 'Aug 2018',
              'description': "R&D AI developper internship - Defined the architecture and implemented a multi-level AI prototype for a video game startup",
              'at': 'Optimystic Labs,', 'at2': 'Stormancer', 'city': 'Tourcoing', 'flag': 'fr', 'country': 'France'},
            { 'period': '3 months', 'from': 'Jun 2017', 'to': 'Aug 2017',
              'description': 'Software developper internship - Implemented unit tests and improved functionnalities of a cashflow forecasting module',
              'at': 'eFront', 'city': 'Belgrade', 'flag': 'rs', 'country': 'Serbia' },
            { 'period': '6 months', 'from': 'Nov 2015', 'to': 'Apr 2015',
              'description': 'Teacher assistant internship - Gave support classes and assisted teachers during practical class',
              'at': 'SJTU-ParisTech,','at2': 'Shanghai JiaoTong', 'city': 'Shanghai', 'flag': 'cn', 'country': 'China' },
            // { 'period': '3 years', 'from': 'Sep 2015', 'to': 'Aug 2018',
            //   'description': 'Engineer diploma',
            //   'at': 'École Polytechnique', 'city': 'Paris', 'flag': 'fr', 'country': 'France' },
            { 'period': '4 years', 'from': 'Sep 2005', 'to': 'Aug 2009',
              'description': 'Lived and studied abroad during childhood',
              'city': 'Gothenburg', 'flag': 'se', 'country': 'Sweden' },
          ]
        }
      },
      isCard() {
        return this.innerWidth < 721
      }
    },
    mounted() {
      window.addEventListener('resize', () => {
        this.innerWidth = window.innerWidth
      })
    },
  }
</script>
