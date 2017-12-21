<template>
  <div class="container">
    <br>
    <i v-show="loading" class="fa fa-spinner fa-spin text-secondary"></i>
    <h1>מאמר חדש</h1>
    <div class="form">
      <div class="form-group">
        <input type="text" name="title" class="form-control" placeholder="כותרת" v-model="title"/>
      </div>
      <div class="form-group">
        <input type="text" name="title" class="form-control" placeholder="שם הכתב" v-model="author"/>
      </div>
      <div class="form-group">
        <input type="date" name="תאריך" class="form-control" v-model="date">
      </div>
      <div class="form-group">
        <textarea rows="2" class="form-control myTextArea" placeholder="תקציר" v-model="lead"></textarea>
      </div>
      <div class="form-group">
        <textarea rows="6" class="form-control myTextArea" placeholder="תוכן" v-model="content"></textarea>
      </div>
      <div class="form-group">
        <input class="btn btn-default" type="file" accept=".jpg,.png" @change="changeImage"/>
      </div>
      <div>
        <button class="btn btn-primary" @click="addArticle">הוספה</button>
      </div>
    </div>
</div>
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
    },

    changeImage (article) {
      this.image = article.target.files[0]
    }
  },
  metaInfo: {
    title: 'מאמר חדש'
  }
}
</script>
<style>
textarea {
  height: auto;
}
</style>