<template>
  <div class="container">
    <br>
    <h1>עדכון מאמר</h1>
    <div class="form">
      <div class="form-group">
        <input type="text" name="title" class="form-control" placeholder="כותרת" v-model="title">
      </div>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="כתב" v-model="author"></textarea>
      </div>
      <div class="form-group">
        <input type="date" name="תאריך" class="form-control" v-model="date">
      </div>
      <div class="form-group">
        <textarea rows="2" class="form-control" placeholder="תקציר" v-model="lead"></textarea>
      </div>
      <div class="form-group">
        <textarea rows="6" class="form-control" placeholder="תוכן" v-model="content"></textarea>
      </div>
      <div class="form-group">
        <input class="btn btn-default" type="file" accept=".jpg,.png" @change="changeImage"></input>
      </div>
      <div class="form-group">
        <img class="img-thumbnail" :src = "image" width="300" height="200" alt="Card image">
      </div>
      <div>
        <button class="btn btn-primary" @click="updateArticle">עכדון</button>
      </div>
    </div>
</div>
</template>

<script>
import ArticlesService from '@/services/ArticlesService'
export default {
  name: 'EditArticle',
  data () {
    return {
      image: '',
      title: '',
      author: '',
      date: '',
      lead: '',
      content: '',
      newImage: ''
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
    async updateArticle () {
      const response = await ArticlesService.updateArticle({
        id: this.$route.params.id,
        title: this.title,
        author: this.author,
        date: this.date,
        lead: this.lead,
        content: this.content
      })
      if (response.data.success && this.newImage) {
        await ArticlesService.uploadArticleImage({
          id: this.$route.params.id,
          image: this.newImage
        })
      }
      this.$router.push({ name: 'ManageArticles' })
    },
    changeImage (event) {
      if (event.target.files[0]) {
        this.newImage = event.target.files[0]
        this.image = this.newImage
      }
    }
  },
  metaInfo: {
    title: 'עריכת מאמר'
  }
}
</script>
<style>
</style>