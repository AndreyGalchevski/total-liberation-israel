<template>
  <div class="container">
    <h1>מאמר חדש</h1>
    <div class="form">
      <div class="form-group">
        <input type="text" name="title" class="form-control" placeholder="כותרת" v-model="title"></input>
      </div>
      <div class="form-group">
        <input type="text" name="title" class="form-control" placeholder="שם הכתב" v-model="author"></input>
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
      <div>
        <button class="btn btn-primary" @click="addArticle">הוספה</button>
      </div>
    </div>
</div>
</template>

<script>
import ArticlesService from '@/services/ArticlesService'
export default {
  name: 'NewArticle',
  data () {
    return {
      title: '',
      author: '',
      date: '',
      lead: '',
      content: '',
      image: ''
    }
  },
  methods: {
    async addArticle () {
      const response = await ArticlesService.addArticle({
        title: this.title,
        author: this.author,
        date: this.date,
        lead: this.lead,
        content: this.content
      })

      if (response.data.success) {
        await ArticlesService.uploadArticleImage({
          id: response.data.article._id,
          image: this.image
        })
      }

      this.$router.push({ name: 'ManageArticles' })
    },

    changeImage (article) {
      this.image = article.target.files[0]
    }
  }
}
</script>
<style>
</style>