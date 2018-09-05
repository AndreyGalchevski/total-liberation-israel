<template lang="pug">
  div.editArticle
    div.container
      i(
        v-show="loading" 
        class="fa fa-spinner fa-spin text-secondary"
      )
      h1 עדכון כתבה
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
            class="form-control" 
            placeholder="כתב" 
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
          textarea(
            rows="2" 
            class="form-control" 
            placeholder="תקציר" 
            v-model="lead"
          )
        div.form-group
          no-ssr
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
        div.form-group
          img.img-thumbnail(
            :src = "image" 
            width="300" 
            height="200" 
            alt="Card image"
          )
        div
          button.btn.btn-primary(
            @click="updateArticle"
          ) עכדון
</template>

<script>
import Vue from 'vue'
import NoSSR from 'vue-no-ssr'
var quillAmir

if (process.browser) {
	quillAmir = require('vue-quill-editor').quillEditor
}
export default {
	name: 'EditArticle',
	data () {
		return {
			image: '',
			title: '',
			author: '',
			date: '',
			lead: '',
			content: {},
			newImage: '',
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
			this.$refs.editor.quill.setContents(this.content)
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
		},
		onEditorChange (event) {
			this.content = this.editor.getContents()
		}
	},
	computed: {
		editor () {
			return this.$refs.editor.quill
		}
	},
	components: {
		quillEditor: quillAmir || new Vue(),
		'no-ssr': NoSSR
	},
	metaInfo: {
		title: 'עריכת כתבה'
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