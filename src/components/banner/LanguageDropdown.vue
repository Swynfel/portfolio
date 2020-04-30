<template>
  <b-navbar-dropdown collapsible right>
    <template slot="label">
      <b-icon :icon='currentFlag' pack="flag-icon" custom-size="is-size-5"/>
    </template>
    <b-navbar-item v-for="item in otherLanguages" tag="router-link" :key="item.lang" :to="{ path: '/'+item.lang }">
      <b-icon :icon='item.flag' pack="flag-icon" custom-size="is-size-5"/>
    </b-navbar-item>
    <!--b-navbar-item tag="router-link" :to="{ path: '/en' }">
      <b-icon icon="gb" pack="flag-icon"/>
    </b-navbar-item>
    <b-navbar-item tag="router-link" :to="{ path: '/fr' }">
      <b-icon icon="fr" pack="flag-icon"/>
    </b-navbar-item>
    <b-navbar-item tag="router-link" :to="{ path: '/jp' }">
      <b-icon icon="jp" pack="flag-icon"/>
    </b-navbar-item-->
  </b-navbar-dropdown>
</template>

<script>
export default {
  data() {
    const languages = [
      { lang: 'en', flag: 'gb'},
      { lang: 'fr', flag: 'fr'},
      { lang: 'jp', flag: 'jp'}
    ];
    return { languages }
  },
  methods: {
    change_language (lang) {
      this.$i18n.locale = lang
    }
  },
  computed: {
    currentFlag: function () {
      var flag = "";
      this.languages.forEach(element => {
        if (this.$i18n.locale == element.lang) {
          flag = element.flag;
          return;
        }
      }, flag)
      return flag;
    },
    otherLanguages: function() {
      return this.languages.filter( element => element.lang != this.$i18n.locale )
    }
  }
}
</script>
