<template>
  <div class="container">
    <div class="articles">
      <br>
      <div class="row">
        <div class="col-md-6" v-for="(article, index) in articles">
          <div class="card">
            <img class="card-img-top" :src="article.image" alt="Card image">
            <div class="card-body">
              <h4 class="card-title">{{ article.title }}</h4>
              <p class="card-text">{{ article.lead }}</p>
              <br>
              <router-link class="btn btn-primary" :to="'/article/' + article._id">קרא עוד</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticlesService from '@/services/ArticlesService'
var moment = require('moment')
export default {
  name: 'articles',
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
    getDate: function (date) {
      return moment(date).format('DD-MM-YYYY')
    }
  }
}
</script>

<style>
</style>