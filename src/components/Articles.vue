<template lang="pug">
  div(class="articles")
    div(class="container")
      img(v-if="loading" src="../assets/spinner/salma.gif")
      div(v-else class="row")
        div(class="col-md-6 card-deck" v-for="article in articles" :key="article._id")
          div(class="card mb-r")
            div(class="view overlay hm-white-slight")
              img(class="img-fluid" :src="article.image" alt="Card image")
              router-link(:to="'/article/' + article._id")
                div(class="mask")
            div(class="card-body")
              h4(class="card-title") {{ article.title }}
              p(class="card-text") {{ article.lead }}
            div(class="card-footer")
              router-link(class="btn btn-primary" :to="'/article/' + article._id") קרא עוד
</template>

<script>
var moment = require('moment')
export default {
  asyncData ({ store, route }) {
    return store.dispatch('getArticles')
  },
  name: 'articles',
  data () {
    return {
      loading: false,
      backgroundColor: '#0099ff',
      size: '100px'
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
    title: 'כתבות'
  }
}
</script>

<style scoped>
.container {
  padding-top: 20px;
}
.articles {
  width: 100%;
}
.img-fluid {
  margin: 0 auto;  
}
.card-footer {
  background-color: #ffffff;
}
</style>