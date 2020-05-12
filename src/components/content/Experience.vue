<template>
  <section id="experience" class="section">
    <div class="container">
      <h1 class="title has-text-centered"><b-icon pack="fas" icon="globe" size="is-medium" custom-size="null"/> {{ $t(`international experience`) }}</h1>

      <br/>

      <b-table :data='data'>
        <template slot-scope="props">
          <b-table-column field="period" width=170 :label="$t(`period`)" centered>
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
            <div class="description">
              <b>{{ props.row.description_top }}</b> <br/>
              {{ props.row.description }}
            </div>
          </b-table-column>
          <b-table-column field="at" width=170 :label="$t(`at`)">
            {{ props.row.at }}
            <br v-if="!isCard"/>
            {{ props.row.at2 }}
          </b-table-column>
          <b-table-column field="location" width=140 :label="$t(`location`)">
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
              'description_top': "Master d'Informatique Appliquée", 'description': "Recherche en Deep Reinforcement Learning pour faire des IA de jeux de plateau",
              'at': 'GSII,', 'at2': 'Université de Tokyo', 'city': 'Tokyo', 'flag': 'jp', 'country': 'Japon'},
            { 'period': '6 mois', 'from': 'Avr 2018', 'to': 'Aoû 2018',
              'description_top': "Stage de développeur AI en R&D", 'description': "Définition de l'architecture et implémentation d'un prototype d'IA multi-niveau pour une startup de jeux vidéo",
              'at': 'Optimystic Labs,', 'at2': 'Stormancer', 'city': 'Tourcoing', 'flag': 'fr', 'country': 'France'},
            { 'period': '3 mois', 'from': 'Juin 2017', 'to': 'Aoû 2017',
              'description_top': "Stage de développeur software", 'description': "Implémentation des tests unitaires et amélioration des fontionnalités d'un module de prévision de cashflow",
              'at': 'eFront', 'city': 'Belgrade', 'flag': 'rs', 'country': 'Serbie' },
            { 'period': '6 mois', 'from': 'Nov 2015', 'to': 'Avr 2016',
              'description_top': "Stage d'assitant de professeur", 'description': "Cours de soutien en Mathématiques et Physiques et aide aux professeurs pendant les travaux pratiques",
              'at': 'SJTU-ParisTech,','at2': 'Shanghai JiaoTong', 'city': 'Shanghai', 'flag': 'cn', 'country': 'Chine' },
            { 'period': '4 ans', 'from': 'Sep 2005', 'to': 'Aug 2009',
              'description_top': "Vie et scolarité à l'étranger pendant l'enfance",
              'at': 'ISGR', 'city': 'Göteborg', 'flag': 'se', 'country': 'Suède' },
          ]
        } else if (lang == 'jp') {
          return [
            { 'period': '２年間', 'from': '２０１８年９月', 'to': '２０２０年８月',
              'description_top': "Master degree of Applied Computer Science", 'description': "Conducted Deep Reinforcement Learning research for making AIs for board games",
              'at': '学際情報学府,', 'at2': '東京大学', 'city': '東京', 'flag': 'jp', 'country': '日本'},
            { 'period': '６ヶ月', 'from': '２０１８年４月', 'to': '２０１８年８月',
              'description_top': "R&D AI developer internship", 'description': "Defined the architecture and implemented a multi-level AI prototype for a video game startup",
              'at': 'Optimystic Labs,', 'at2': 'Stormancer', 'city': 'トゥールコワン', 'flag': 'fr', 'country': 'フランス'},
            { 'period': '３ヶ月', 'from': '２０１７年６月', 'to': '２０１７年８月',
              'description_top': "Software developer internship", 'description': 'Implemented unit tests and improved functionnalities of a cashflow forecasting module',
              'at': 'eFront', 'city': 'ベオグラード', 'flag': 'rs', 'country': 'セルビア' },
            { 'period': '６ヶ月', 'from': '２０１５年１０月', 'to': '２０１６年４月',
              'description_top': "Teacher assistant internship", 'description': 'Gave support classes in Mathematics and Physics, and assisted teachers during practical classes',
              'at': 'SJTU-ParisTech,','at2': '上海交通大学', 'city': '上海', 'flag': 'cn', 'country': '中国' },
            { 'period': '４年間', 'from': '２００５年９月', 'to': '２００９年８月',
              'description_top': 'Lived and studied abroad during childhood',
              'at': 'ISGR', 'city': 'ヨーテボリ', 'flag': 'se', 'country': 'スウェーデン' },
          ]
        } else {
          // 'en' or default
          return [
            { 'period': '2 years', 'from': 'Sep 2018', 'to': 'Aug 2020',
              'description_top': "Master degree of Applied Computer Science", 'description': "Conducted Deep Reinforcement Learning research for making AIs for board games",
              'at': 'GSII,', 'at2': 'University of Tokyo', 'city': 'Tokyo', 'flag': 'jp', 'country': 'Japan'},
            { 'period': '6 months', 'from': 'Apr 2018', 'to': 'Aug 2018',
              'description_top': "R&D AI developer internship", 'description': "Defined the architecture and implemented a multi-level AI prototype for a video game startup",
              'at': 'Optimystic Labs,', 'at2': 'Stormancer', 'city': 'Tourcoing', 'flag': 'fr', 'country': 'France'},
            { 'period': '3 months', 'from': 'Jun 2017', 'to': 'Aug 2017',
              'description_top': "Software developer internship", 'description': 'Implemented unit tests and improved functionnalities of a cashflow forecasting module',
              'at': 'eFront', 'city': 'Belgrade', 'flag': 'rs', 'country': 'Serbia' },
            { 'period': '6 months', 'from': 'Nov 2015', 'to': 'Apr 2016',
              'description_top': "Teacher assistant internship", 'description': 'Gave support classes in Mathematics and Physics, and assisted teachers during practical classes',
              'at': 'SJTU-ParisTech,','at2': 'Shanghai JiaoTong', 'city': 'Shanghai', 'flag': 'cn', 'country': 'China' },
            // { 'period': '3 years', 'from': 'Sep 2015', 'to': 'Aug 2018',
            //   'description': 'Engineer diploma',
            //   'at': 'École Polytechnique', 'city': 'Paris', 'flag': 'fr', 'country': 'France' },
            { 'period': '4 years', 'from': 'Sep 2005', 'to': 'Aug 2009',
              'description_top': 'Lived and studied abroad during childhood',
              'at': 'ISGR', 'city': 'Gothenburg', 'flag': 'se', 'country': 'Sweden' },
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
