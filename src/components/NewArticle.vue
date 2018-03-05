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
          quill-editor(
            ref="editor"
            @change="onEditorChange($event)"
            :options="quillOptions"
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
import Vue from 'vue'
var quillMohamad

if (process.browser) {
  quillMohamad = require('vue-quill-editor').quillEditor
}

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
        theme: 'snow',
        formats: [
          'align',
          'bold',
          'background',
          'color',
          'italic',
          'list',
          'size',
          'underline',
          'blockquote',
          'direction',
          'video'
        ],
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline'],
            ['blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'align': [] }]
          ]
        },
        placeholder: ''
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
    },

    onEditorChange (event) {
      this.content = this.editor.getContents()
    }
  },
  metaInfo: {
    title: 'כתבה חדשה'
  },
  computed: {
    editor () {
      return this.$refs.editor.quill
    }
  },
  mounted () {
    this.editor.format('direction', 'rtl')
    this.editor.format('align', 'right')
    this.content = this.editor.getContents()
  },
  components: {
    quillEditor: quillMohamad || new Vue({
      el: '#quill-editor'
    })
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