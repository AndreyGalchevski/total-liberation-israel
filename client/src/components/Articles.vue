<template>
  <div class="articles">
    <div class="container">
      <br> 
      <double-bounce v-show="loading" :background="backgroundColor" :size="size" ></double-bounce>
      <div class="row">
        <div class="col-md-6 card-deck" v-for="article in articles" :key="article._id">
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
  </div>
</template>

<script>
import DoubleBounce from 'vue-loading-spinner/src/components/DoubleBounce'
var moment = require('moment')
export default {
  name: 'articles',
  data () {
    return {
      loading: false,
      backgroundColor: '#0099ff',
      size: '100px'
    }
  },
  components: {
    DoubleBounce
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
    getDate: function (date) {
      return moment(date).format('DD.MM.YYYY')
    }
  },
  computed: {
    articles () {
      return this.$store.getters.articles
    }
  },
  destroyed () {
    this.$store.commit('CLEAR_ARTICLES')
  },
  metaInfo: {
    title: 'מאמרים'
  }
}
</script>

<style>
.articles {
  width: 100%;
}
.card-footer {
  background-color: #ffffff;
}
</style>