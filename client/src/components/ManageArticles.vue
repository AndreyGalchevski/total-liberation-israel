<template lang="pug">
  div(class="articles")
    div(class="container")
      br
      i(v-show="loading" class="fa fa-spinner fa-spin text-secondary")
      div(v-if="articles.length > 0")
        div
          router-link(v-bind:to="{ name: 'NewArticle' }" class="btn btn-primary") מאמר חדש
        br
        div(class="table-responsive")
          table(class="table table")
            thead(class="bg-light")
              tr
                td כותרת
                td תאריך
                td פעולה
            tbody
              tr(v-for="article in articles" :key="article._id")
                td {{ article.title }}
                td {{ getDate(article.date) }}
                td
                  router-link(v-bind:to="{ name: 'EditArticle', params: { id: article._id } }") עריכה | 
                  a(href="#" @click="deleteArticle(article._id)") מחיקה
      div(v-else)
        br
        h4 אין מאמרים להצגה
        br
        router-link(v-bind:to="{ name: 'NewArticle' }" class="btn btn-primary") הוספת מאמר
</template>

<script>
var moment = require('moment')
export default {
  name: 'ManageArticles',
  data () {
    return {
      loading: false
    }
  },
  mounted () {
    this.getArticles()
  },
  methods: {
    async getArticles () {
      this.loading = true
      await this.$store.dispatch('getArticles')
      this.loading = false
    },
    async deleteArticle (id) {
      this.loading = true
      await this.$store.dispatch('deleteArticle', id)
      this.getArticles()
      this.$router.push({ name: 'ManageArticles' })
      this.loading = false
    },
    getDate: function (date) {
      return moment(date).format('DD.MM.YYYY')
    }
  },
  computed: {
    articles () {
      return this.$store.getters.articles
    }
  },
  metaInfo: {
    title: 'ניהול מאמרים'
  }
}
</script>

<style scoped>
.articles {
  width: 100%;
}
</style>