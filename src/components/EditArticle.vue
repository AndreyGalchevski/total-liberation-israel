<template lang="pug">
div.editArticle
	div.container
		i.fa.fa-spinner.fa-spin.text-secondary(v-show="loading")
		h1 עדכון כתבה
		div.form
			div.form-group
				input.form-control(
					type="text" 
					name="title" 
					placeholder="כותרת" 
					v-model="title"
				)
			div.form-group
				input.form-control(
					type="text" 
					placeholder="כתב" 
					v-model="author"
				)
			div.form-group
				input.form-control(
					type="date" 
					name="תאריך" 
					v-model="date"
				)
			div.form-group
				textarea.form-control(
					rows="2" 
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
				button.btn.btn-primary(@click="saveArticle") שמירה
</template>

<script>
import NoSSR from 'vue-no-ssr'
import moment from 'moment'
let quillEditor
if (process.browser) {
	quillEditor = require('vue-quill-editor').quillEditor
}

export default {
	name: 'EditArticle',
	props: ['isNew'],
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
					'image',
					'italic',
					'link',
					'list',
					'size',
					'underline',
					'blockquote',
					'direction',
					'video'
				],
				modules: {
					toolbar: [
						['link', 'image'],
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
		if (!this.isNew) {
			this.getArticle()
		}
	},
	methods: {
		async getArticle () {
			this.loading = true
			await this.$store.dispatch('getArticle', this.$route.params.id)
			const { title, author, date, lead, content, image } = this.$store.getters.article
			this.image = image
			this.title = title
			this.author = author
			this.date = this.formatDate(date)
			this.lead = lead
			this.content = content
			this.$refs.editor.quill.setContents(this.content)
			this.loading = false
		},
		async saveArticle () {
			this.loading = true
			const { title, author, date, lead, content, image } = this
			const articleData = { title, author, date, lead, content, image }
			if (this.isNew) {
				await this.$store.dispatch('addArticle', articleData)
			} else {
				articleData.id = this.$route.params.id
				articleData.newImage = this.newImage
				await this.$store.dispatch('updateArticle', articleData)
			}

			this.$router.push({ name: 'ManageArticles' })
			this.loading = false
		},
		changeImage (event) {
			if (this.isNew) {
				this.image = event.target.files[0]
			} else {
				this.newImage = event.target.files[0]
			}
		},
		onEditorChange () {
			this.content = this.editor.getContents()
		},
		formatDate (date) {
			return moment(date).format('YYYY-MM-DD')
		}
	},
	computed: {
		editor () {
			return this.$refs.editor.quill
		}
	},
	components: {
		'no-ssr': NoSSR,
		quillEditor
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