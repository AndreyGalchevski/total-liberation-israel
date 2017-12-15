<template>
  <div class="container">
    <div class="article">
      <br>
      <i v-show="loading" class="fa fa-spinner fa-spin text-secondary"></i>
      <div class="row">
        <div class=".col-md-6 .offset-md-3 my-card">
              <h2><b>{{ title }}</b></h2>
              <br>
              <h6 class="lead"><b>{{ lead }}</b></h6>
              <br>
              <h6 class="text-primary">פורסם ב - {{ getDate(date) }} ע"י {{ author }} </h6>
              <br>
              <img class="rounded my-card-img" :src = "image" alt="Card image">
              <br><br>
              <br>
              <p c>
                <a href="#">
                  <i class="fa fa-facebook-square my-icon" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i class="fa fa-envelope-o my-icon" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i class="fa fa-whatsapp my-icon" aria-hidden="true"></i>
                </a>
              </p>
              <br>
              <p class="myContent">{{ content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticlesService from '@/services/ArticlesService'
var moment = require('moment')
export default {
  name: 'article',
  data () {
    return {
      title: '',
      image: '',
      author: '',
      date: '',
      lead: '',
      content: '',
      loading: false
    }
  },
  mounted () {
    this.getArticle()
  },
  methods: {
    async getArticle () {
      this.loading = true
      const response = await ArticlesService.getArticle({
        id: this.$route.params.id
      })
      this.image = response.data.image
      this.title = response.data.title
      this.author = response.data.author
      this.date = response.data.date
      this.lead = response.data.lead
      this.content = response.data.content
      this.loading = false
    },
    getDate: function (date) {
      return moment(date).format('DD.MM.YYYY')
    }
  },
  metaInfo: {
    title: 'מאמר'
  }
}
</script>

<style>
.my-card {
  padding:15px;
}
.my-card-img {
   width: 300px; 
   height: 200px;
}
.my-icon {
  font-size: 35px;
  color: #007bff;
}
.fa-envelope-o {
  padding-right: 50px;
  padding-left: 50px;
}
.myContent {
  white-space:pre-wrap;
}
</style>