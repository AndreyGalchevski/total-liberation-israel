<template>
  <div class="container">
    <div class="articles">
      <br>
      <i v-show="loading" class="fa fa-spinner fa-spin text-secondary"></i>
      <div class="row">
        <div class="col-md-6 card-deck" v-for="(article, index) in articles">
          <div class="card">
            <img class="card-img-top" :src="article.image" alt="Card image">
            <div class="card-body">
              <h4 class="card-title">{{ article.title }}</h4>
              <p class="card-text">{{ article.lead }}</p>
            </div>
            <div class="card-footer">
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
      articles: [],
      loading: false
    }
  },
  mounted () {
    this.getArticles()
  },
  methods: {
    async getArticles () {
      this.loading = true
      const response = await ArticlesService.fetchArticles()
      this.articles = response.data.articles
      this.loading = false
    },
    getDate: function (date) {
      return moment(date).format('DD-MM-YYYY')
    }
  },
  metaInfo: {
    title: 'מאמרים'
  }
}
</script>

<style>
</style>