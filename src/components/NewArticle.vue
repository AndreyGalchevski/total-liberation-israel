<template lang="pug">
  div.newArticle
    div.container
      i.fa.fa-spinner.fa-spin.text-secondary(
        v-show="loading"
      )
      h1 כתבה חדשה
      div.form
        div.form-group
          input(
              type="text"
              name="title"
              class="form-control"
              placeholder="כותרת"
              v-model="title"
            )
        div.form-group
          input(
            type="text"
            name="title"
            class="form-control"
            placeholder="שם הכתב"
            v-model="author"
          )
        div.form-group
          input(
            type="date" 
            name="תאריך" 
            class="form-control" 
            v-model="date"
          )
        div.form-group
          textarea.form-control.myTextArea(
            rows="2" 
            placeholder="תקציר" 
            v-model="lead"
          )
        div.form-group
          //- textarea.form-control.myTextArea(
          //-   rows="6" 
          //-   placeholder="תוכן" 
          //-   v-model="content"
          //- )
          div(
            v-model="content"
            v-quill:quillEditor="quillOptions"
          )
        div.form-group
          input.btn.btn-default(
            type="file" 
            accept=".jpg,.png" 
            @change="changeImage"
          )
        div
          button.btn.btn-primary(
            @click="addArticle"
          ) הוספה
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
      content: {},
      image: '',
      loading: false,
      quillOptions: {
        theme: 'snow'
      }
    }
  },
  methods: {
    async addArticle () {
      if (!this.title || !this.date || !this.author || !this.lead || !this.content || !this.image) {
        window.alert('נא למלא את כל השדות')
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