<template lang="pug">
  div(class="newArticle")
    div(class="container")
      i(v-show="loading" class="fa fa-spinner fa-spin text-secondary")
      h1 כתבה חדשה
      div(class="form")
        div(class="form-group")
          input(type="text" name="title" class="form-control" placeholder="כותרת" v-model="title")
        div(class="form-group")
          input(type="text" name="title" class="form-control" placeholder="שם הכתב" v-model="author")
        div(class="form-group")
          input(type="date" name="תאריך" class="form-control" v-model="date")
        div(class="form-group")
          textarea(rows="2" class="form-control myTextArea" placeholder="תקציר" v-model="lead")
        div(class="form-group")
          textarea(rows="6" class="form-control myTextArea" placeholder="תוכן" v-model="content")
        div(class="form-group")
          input(class="btn btn-default" type="file" accept=".jpg,.png" @change="changeImage")
        div
          button(class="btn btn-primary" @click="addArticle") הוספה
</template>

<script>
export default {
  name: 'NewArticle',
  data () {
    return {
      title: '',
      author: '',
      date: '',
      lead: '',
      content: '',
      image: '',
      loading: false
    }
  },
  methods: {
    async addArticle () {
      if (!this.title || !this.date || !this.author || !this.lead || !this.content || !this.image) {
        alert('נא למלא את כל השדות')
      } else {
        this.loading = true
        await this.$store.dispatch('addArticle', {
          title: this.title,
          author: this.author,
          date: this.date,
          lead: this.lead,
          content: this.content,
          image: this.image
        })
        this.$router.push({ name: 'ManageArticles' })
        this.loading = false
      }
    },

    changeImage (article) {
      this.image = article.target.files[0]
    }
  },
  metaInfo: {
    title: 'כתבה חדשה'
  }
}
</script>
<style scoped>
textarea {
  height: auto;
}
h1 {
  padding: 20px;
}
</style>