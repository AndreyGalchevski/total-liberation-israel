<template lang="pug">
  div(class="container")
    i(v-show="loading" class="fa fa-spinner fa-spin text-secondary")
    h1 עדכון מאמר
    div(class="form")
      div(class="form-group")
        input(type="text" name="title" class="form-control" placeholder="כותרת" v-model="title")
      div(class="form-group")
        input(type="text" class="form-control" placeholder="כתב" v-model="author")
      div(class="form-group")
        input(type="date" name="תאריך" class="form-control" v-model="date")
      div(class="form-group")
        textarea(rows="2" class="form-control" placeholder="תקציר" v-model="lead")
      div(class="form-group")
        textarea(rows="6" class="form-control" placeholder="תוכן" v-model="content")
      div(class="form-group")
        input(class="btn btn-default" type="file" accept=".jpg,.png" @change="changeImage")
      div(class="form-group")
        img(class="img-thumbnail" :src = "image" width="300" height="200" alt="Card image")
      div
        button(class="btn btn-primary" @click="updateArticle") עכדון
</template>

<script>
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
      newImage: '',
      loading: false
    }
  },
  mounted () {
    this.getArticle()
  },
  methods: {
    async getArticle () {
      this.loading = true
      await this.$store.dispatch('getArticle', this.$route.params.id)
      this.image = this.$store.getters.article.image
      this.title = this.$store.getters.article.title
      this.author = this.$store.getters.article.author
      this.date = this.$store.getters.article.date
      this.lead = this.$store.getters.article.lead
      this.content = this.$store.getters.article.content
      this.loading = false
    },
    async updateArticle () {
      this.loading = true
      await this.$store.dispatch('updateArticle', {
        id: this.$route.params.id,
        title: this.title,
        author: this.author,
        date: this.date,
        lead: this.lead,
        content: this.content,
        image: this.image,
        newImage: this.newImage
      })
      this.$router.push({ name: 'ManageArticles' })
      this.loading = false
    },
    changeImage (event) {
      this.newImage = event.target.files[0]
    }
  },
  metaInfo: {
    title: 'עריכת מאמר'
  }
}
</script>
<style>
textarea {
  height: auto;
}
h1 {
  padding: 20px;
}
</style>