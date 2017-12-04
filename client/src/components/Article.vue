<template>
  <div class="container">
    <div class="article">
      <br>
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title">{{ title }}</h3>
              <img class="rounded my-card-img" :src = "image" alt="Card image">
              <br><br>
              <h5 class="card-title">{{ author }}</h5>
              <p class="card-text">{{ getDate(date) }}</p>
              <p class="card-text"><b>{{ lead }}</b></p>
              <br>
              <p class="card-text">
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
              <p class="card-text">{{ content }}</p>
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
  name: 'article',
  data () {
    return {
      title: '',
      image: '',
      author: '',
      date: '',
      lead: '',
      content: ''
    }
  },
  mounted () {
    this.getArticle()
  },
  methods: {
    async getArticle () {
      const response = await ArticlesService.getArticle({
        id: this.$route.params.id
      })
      this.image = response.data.image
      this.title = response.data.title
      this.author = response.data.author
      this.date = response.data.date
      this.lead = response.data.lead
      this.content = response.data.content
    },
    getDate: function (date) {
      return moment(date).format('DD-MM-YYYY')
    }
  }
}
</script>

<style>
.my-card-img {
   width: 300px; 
   height: 200px;
}
.my-icon {
  font-size: 35px;
  color: #4d4d4d;
}
.fa-envelope-o {
  padding-right: 50px;
  padding-left: 50px;
}
</style>