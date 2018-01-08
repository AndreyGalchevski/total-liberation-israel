<template lang="pug">
  div(class="wrapper")
    div(class="other-articles w-50")
      div(v-for="article in articles" :key="article._id" v-if="article._id !== thisArticle._id")
        div(class="card mb-r")
          div(class="view overlay hm-white-slight")
            img(class="img-fluid" :src="article.image" alt="Card image")
            router-link(:to="'/article/' + article._id")
              div(class="mask")
            div(class="card-body")
              p(class="card-title") {{ article.title }}
    div(class="main-article" v-if="thisArticle")
      h1(class="title") {{ thisArticle.title }}
      h6(class="lead") {{ thisArticle.lead }}
      h6(class="date text-primary") פורסם ב - {{ getDate(thisArticle.date) }} ע"י {{ thisArticle.author }}
      img(class="rounded main-image img-fluid" :src = "thisArticle.image" alt="Card image")
      p(class="share-buttons d-sm-none")
        a(:href="'mailto:?subject=' + thisArticle.title + '&body=https://warm-tundra-37915.herokuapp.com/article' + thisArticle._id")
          i(class="fa fa-envelope-o my-icon" aria-hidden="true")
        a(class="fb-xfbml-parse-ignore" target="_blank" 
        :href="'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwarm-tundra-37915.herokuapp.com%2Farticle%2F&amp;src=sdkpreparse' + thisArticle._id + '&amp;src=sdkpreparse'")
          i(class="fa fa-facebook-square my-icon" aria-hidden="true")
        a(:href="'whatsapp://send?text=https://warm-tundra-37915.herokuapp.com/article/' + thisArticle._id" data-action="share/whatsapp/share" target="_blank")
          i(class="fa fa-whatsapp my-icon whatsapp-mobile" aria-hidden="true")
      p(class="share-buttons d-none d-md-block")
        a(:href="'mailto:?subject=' + thisArticle.title + '&body=https://warm-tundra-37915.herokuapp.com/article' + thisArticle._id")
          i(class="fa fa-envelope-o my-icon" aria-hidden="true")
        a(class="fb-xfbml-parse-ignore" target="_blank" 
        :href="'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwarm-tundra-37915.herokuapp.com%2Farticle%2F&amp;src=sdkpreparse' + thisArticle._id + '&amp;src=sdkpreparse'")
          i(class="fa fa-facebook-square my-icon" aria-hidden="true")
        a(:href="'https://web.whatsapp.com/send?text=https://warm-tundra-37915.herokuapp.com/article/' + thisArticle._id" data-action="share/whatsapp/share" target="_blank")
          i(class="fa fa-whatsapp my-icon whatsapp-desktop" aria-hidden="true")
      p(class="my-content") {{ thisArticle.content }}
</template>

<script>
var moment = require('moment')
export default {
  name: 'article',
  data () {
    return {
      loading: false,
      pageTitle: 'מאמר'
    }
  },
  mounted () {
    this.getArticle()
    this.getArticles()
  },
  methods: {
    async getArticle () {
      this.loading = true
      await this.$store.dispatch('getArticle', this.$route.params.id)
      this.pageTitle = this.$store.getters.article.title
      this.loading = false
    },
    getDate: function (date) {
      return moment(date).format('DD.MM.YYYY')
    },
    async getArticles () {
      this.loading = true
      await this.$store.dispatch('getArticles')
      this.loading = false
    }
  },
  metaInfo () {
    return {
      title: this.pageTitle
    }
  },
  computed: {
    thisArticle () {
      return this.$store.getters.article
    },
    articles () {
      return this.$store.getters.articles
    }
  },
  destroyed () {
    this.$store.commit('CLEAR_ARTICLES')
    this.$store.commit('CLEAR_ARTICLE')
  }
}
</script>

<style>
@media (max-width: 1200px) {
  .other-articles {
    display: none;
  }
  .main-article {
    grid-column: span 4;
  }
}
.wrapper{
  display:grid;
  grid-template-columns:1fr 2fr 1fr;
  grid-gap:1em;
  grid-auto-rows: minmax(100px, auto);
}
.wrapper > div{
  padding:1em;
}
.main-article img {
   width: 500px; 
   height: 300px;
}
.other-articles {
  text-align: center;
}
.other-articles .card-text {
  font-size: 15px;
}
.my-icon {
  font-size: 35px;
}
.fa-facebook-square {
  padding-right: 50px;
  padding-left: 50px;
  color: #3b5998;
}
.fa-envelope-o {
  color: #ff3333;
}
.fa-whatsapp {
  color: #25d366;
}
.my-content {
  text-align: right;
  font-size: 17px;
  white-space:pre-wrap;
}
.title, .lead, .date, .main-image, .share-buttons {
  padding-bottom: 20px;
}
.lead {
  font-weight: lighter;
}
.share-buttons {
  padding-top: 10px;
}
</style>