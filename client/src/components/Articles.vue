<template>
  <div class="container">
    <br> 
    <rotate-square3 v-show="loading" :color="backgroundColor" :size="size" ></rotate-square3>
    <div class="row">
      <div class="col-md-6 card-deck" v-for="(article, index) in articles">
        <div class="card mb-r">
          <div class="view overlay hm-white-slight">
            <img class="img-fluid" :src="article.image" alt="Card image">
            <router-link :to="'/article/' + article._id">
              <div class="mask"></div>
            </router-link>
          </div>
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
</template>

<script>
import RotateSquare3 from 'vue-loading-spinner/src/components/RotateSquare3'
import ArticlesService from '@/services/ArticlesService'
var moment = require('moment')
export default {
  name: 'articles',
  data () {
    return {
      articles: [],
      loading: false,
      backgroundColor: '#0099ff',
      size: '100px'
    }
  },
  components: {
    RotateSquare3
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
.card-footer {
  background-color: #ffffff;
}
</style>