<template>
  <div class="container">
    <div class="articles">
      <br>
      <div v-if="articles.length > 0">
        <div>
          <router-link v-bind:to="{ name: 'NewArticle' }" class="btn btn-danger">מאמר חדש</router-link>
        </div>
        <br>
        <div class="table-responsive">
          <table class="table table-striped">
            <thead class="bg-secondary">
              <tr>
                <td>כותרת</td>
                <td>תאריך</td>
                <td>שם הכתב</td>
                <td>פעולה</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="article in articles">
                <td>{{ article.title }}</td>
                <td>{{ article.author }}</td>
                <td>{{ getDate(article.date) }}</td>
                <td>
                  <router-link v-bind:to="{ name: 'EditArticle', params: { id: article._id } }">עריכה</router-link> |
                  <a href="#" @click="deleteArticle(article._id)">מחיקה</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div v-else>
        <br>
        <h4>אין מאמרים להצגה</h4>
        <br>
        <router-link v-bind:to="{ name: 'NewArticle' }" class="btn btn-primary">הוספת מאמר</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ArticlesService from '@/services/ArticlesService'
var moment = require('moment')
export default {
  name: 'ManageArticles',
  data () {
    return {
      articles: []
    }
  },
  mounted () {
    this.getArticles()
  },
  methods: {
    async getArticles () {
      const response = await ArticlesService.fetchArticles()
      this.articles = response.data.articles
    },
    async deleteArticle (id) {
      await ArticlesService.deleteArticle(id)
      this.getArticles()
      this.$router.push({ name: 'ManageArticles' })
    },
    getDate: function (date) {
      return moment(date).format('DD-MM-YYYY')
    }
  }
}
</script>

<style scoped>
</style>