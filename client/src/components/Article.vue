<template>
  <div class="wrapper">
    <div class="otherArticles w-50">
      <div v-for="article in articles" :key="article._id" v-if="article._id !== thisArticle._id">
        <div class="card mb-r">
          <div class="view overlay hm-white-slight">
            <img class="img-fluid" :src="article.image" alt="Card image">
            <router-link :to="'/article/' + article._id">
              <div class="mask"></div>
            </router-link>
          </div>
            <div class="card-body">
              <p style="font-size: 15px" class="card-title">{{ article.title }}</p>
            </div>
          </div>
      </div>
    </div>
    <div class="mainArticle" v-if="thisArticle">
      <h2><b>{{ thisArticle.title }}</b></h2>
      <br>
      <h6 class="lead"><b>{{ thisArticle.lead }}</b></h6>
      <br>
      <h6 class="text-primary">פורסם ב - {{ getDate(thisArticle.date) }} ע"י {{ thisArticle.author }} </h6>
      <br>
      <img class="rounded my-card-img img-fluid" :src = "thisArticle.image" alt="Card image">
      <br><br>
      <br>
      <p c>
        <a href="#">
          <i class="fa fa-envelope-o my-icon" aria-hidden="true"></i>
        </a>
        <a href="#">
          <i class="fa fa-facebook-square my-icon" aria-hidden="true"></i>
        </a>
        <a href="#">
          <i class="fa fa-whatsapp my-icon" aria-hidden="true"></i>
        </a>
      </p>
      <br>
      <p class="myContent">{{ thisArticle.content }}</p>
    </div>
  </div>
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
@media (max-width: 700px) {
  .otherArticles {
    display: none;
  }
  .mainArticle {
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

.mainArticle img {
   width: 500px; 
   height: 300px;
}
.otherArticles {
  text-align: center;
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
.myContent {
  text-align: right;
  font-size: 17px;
  white-space:pre-wrap;
}
</style>