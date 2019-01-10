<template lang="pug">
div
	div.wrapper
		div.other-articles.w-50
			div(
				v-for="article in articles" 
				:key="article._id" 
				v-if="article._id !== thisArticle._id"
			)
				div.card.hoverable
					div.card-image
						router-link(:to="'/article/' + article._id")
							img.img-fluid(:src="article.image" alt="Card image")
					div.card-content
						router-link(:to="'/article/' + article._id")
							p.card-title {{ article.title }}
		div.main-article(v-if="thisArticle.title")
			h3.title {{ thisArticle.title }}
			h5.lead {{ thisArticle.lead }}
			h6.date {{ formatDate(thisArticle.date) }} |
				span.author  {{ thisArticle.author }}
			img.rounded.main-image.responsive-img(:src="thisArticle.image" alt="Card image")
			p.share-buttons
				a(:href="'mailto:?subject=' + thisArticle.title + '&body=https://www.totalliberationisrael.com/article/' + thisArticle._id")
					i.far.fa-envelope.top-icon
				a.fb-xfbml-parse-ignore(
					target="_blank"
					:href="'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.totalliberationisrael.com%2Farticle%2F' + thisArticle._id + '&amp;src=sdkpreparse'"
				)
					i.fab.fa-facebook-f.top-icon.top-facebook-icon
				a(
					:href="'https://api.whatsapp.com/send?text=https://www.totalliberationisrael.com/article/' + thisArticle._id" 
					data-action="share/whatsapp/share" 
					target="_blank"
				)
					i.fab.fa-whatsapp.top-icon
			no-ssr
				quill-editor(
					@ready="onEditorReady($event)"
					:options="quillOptions"
					ref="editor"
				)
	div.additional-articles-container(v-if="thisArticle.title")
		hr.myHr
		h5 כתבות נוספות
		hr.myHr    
		div.container.additional-articles.w-75
			div.row.align-items-start(
				v-for="article in articles" 
				:key="article._id" 
				v-if="article._id !== thisArticle._id"
			)
				div.card.hoverable
					div.card-image
						router-link(:to="'/article/' + article._id")
							img.img-fluid(:src="article.image" alt="Card image")
					div.card-content
						router-link(:to="'/article/' + article._id")
							p.card-title {{ article.title }}
</template>

<script>
import NoSSR from 'vue-no-ssr'
import moment from 'moment'
let quillEditor
if (process.browser) {
	quillEditor = require('vue-quill-editor').quillEditor
}

export default {
	name: 'articleComponent',
	asyncData ({ store, route }) {
		return store.dispatch('getArticle', route.params.id)
	},
	data () {
		return {
			loading: false,
			quillOptions: {
				theme: false,
				readOnly: true,
				modules: {
					toolbar: false
				},
				placeholder: '',
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
				]
			}
		}
	},
	mounted () {
		this.getArticle()
		this.getArticles()
	},
	methods: {
		async getArticle () {
			this.loading = true
			await this.$store.dispatch('getArticle', this.$route.params.id)
			this.$refs.editor.quill.setContents(this.thisArticle.content)
			this.loading = false
		},
		formatDate (date) {
			return moment(date).locale('he').format('Do בMMMM YYYY')
		},
		async getArticles () {
			this.loading = true
			await this.$store.dispatch('getArticles')
			this.loading = false
		},
		onEditorReady () {
			this.$refs.editor.quill.setContents(this.thisArticle.content)
		}
	},
	metaInfo () {
		return {
			meta: [
				{property: 'og:url', content: 'https://www.totalliberationisrael.com/article/' + this.$route.params.id},
				{property: 'og:type', content: 'article'},
				{property: 'og:title', content: this.pageTitle},
				{property: 'og:description', content: this.ogDescription},
				{property: 'og:image', content: this.ogImage}
			],
			title: this.pageTitle
		}
	},
	computed: {
		pageTitle () {
			if (this.$store.getters.article.title) {
				return this.$store.getters.article.title
			} else {
				return 'כתבה'
			}
		},
		ogDescription () {
			if (this.$store.getters.article.lead) {
				return this.$store.getters.article.lead
			} else {
				return ''
			}
		},
		ogImage () {
			if (this.$store.getters.article.image) {
				return this.$store.getters.article.image
			} else {
				return ''
			}
		},
		thisArticle () {
			return this.$store.getters.article
		},
		articles () {
			return this.$store.getters.articles
		}
	},
	destroyed () {
		this.$store.commit('CLEAR_ARTICLE')
		this.$store.commit('CLEAR_ARTICLES')
	},
	components: {
		'no-ssr': NoSSR,
		quillEditor
	}
}
</script>

<style>
.ql-editor {
	height: initial;
}
@media (max-width: 1200px) {
	.other-articles {
		display: none;
	}
	.main-article {
		grid-column: span 4;
	}
}
@media (min-width: 1200px) {
	.additional-articles-container {
		display: none;
	}
}
.wrapper{
	display: grid;
	grid-template-columns: 1fr 2fr 1fr;
	grid-gap: 1em;
	grid-auto-rows: minmax(200px, auto);
}
.wrapper > div{
	padding-right: 1em;
	padding-left: 1em;
}
.main-article img {
	max-height: 300px;
}
.main-article {
	padding-bottom: 50px;
}
.other-articles {
	text-align: center;
}
.other-articles .card {
	height: 13em;
	width: 14em;
}
.other-articles .card .card-title {
	font-size: 16px;
}
.other-articles .card .card-content {
	padding-top: 0.5em;
}
.container.additional-articles {
	padding-top: 10px;
	padding-bottom: 40px;
}
.top-icon {
	font-size: 35px !important;
}
.fa-facebook-f {
	color: #3b5998;
	padding-right: 50px;
	padding-left: 50px;
}
.fa-envelope {
	color: #ff3333;
}
.fa-whatsapp {
	color: #25d366;
}
.title, .lead, .date, .main-image, .share-buttons {
	padding-bottom: 20px;
}
.date {
	color: #9e9e9e;
}
.author {
	color: #2962ff;
}
.share-buttons {
	padding-top: 10px;
}
hr.myHr {
	border: 0;
	height: 1px;
	background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
}
</style>