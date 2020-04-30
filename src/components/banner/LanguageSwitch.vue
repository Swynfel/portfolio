<template>
  <ul>
    <li v-for="lang in languages" :key="lang" @click="change_language(lang)">
      {{ lang }}
    </li>
  </ul>
</template>


<script>
export default {
  data: () => ({
    languages: ['en', 'fr'],
  }),
  methods: {
    change_language (lang) {
      this.$i18n.locale = lang
    }
  }
}
</script>
