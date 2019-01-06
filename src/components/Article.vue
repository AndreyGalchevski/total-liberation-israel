<template lang="pug">
div
	div.wrapper
		div.other-articles.w-50
			div(
				v-for="article in articles" 
				:key="article._id" 
				v-if="article._id !== thisArticle._id"
			)
				div.card.mb-r
					div.view.overlay.hm-white-slight
						router-link(:to="'/article/' + article._id")
							img.img-fluid(:src="article.image" alt="Card image")
							div.mas
						div.card-body
							router-link(:to="'/article/' + article._id")
								p.card-title {{ article.title }}
		div.main-article(v-if="thisArticle.title")
			h1.title {{ thisArticle.title }}
			h6.lead {{ thisArticle.lead }}
			h6.date.text-muted {{ formatDate(thisArticle.date) }} |
				span.text-primary  {{ thisArticle.author }}
			img.rounded.main-image.img-fluid(:src="thisArticle.image" alt="Card image")
			p.share-buttons
				a(:href="'mailto:?subject=' + thisArticle.title + '&body=https://www.totalliberationisrael.com/article/' + thisArticle._id")
					i.fa.fa-envelope-o.top-icon(aria-hidden="true")
				a.fb-xfbml-parse-ignore(
					target="_blank"
					:href="'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.totalliberationisrael.com%2Farticle%2F' + thisArticle._id + '&amp;src=sdkpreparse'"
				)
					i.fa.fa-facebook-square.top-facebook-icon.top-icon(aria-hidden="true")
				a(
					:href="'https://api.whatsapp.com/send?text=https://www.totalliberationisrael.com/article/' + thisArticle._id" 
					data-action="share/whatsapp/share" 
					target="_blank"
				)
					i.fa.fa-whatsapp.top-icon(aria-hidden="true")
			no-ssr
				quill-editor(
					@ready="onEditorReady($event)"
					:options="quillOptions"
					ref="editor"
				)
			div.dropdown-share.btn-group
				button.btn.btn-outline-primary.waves-effect(
					type="button" 
					data-toggle="dropdown" 
					aria-haspopup="true" 
					aria-expanded="false"
				)
					i.fa.fa-share-alt(aria-hidden="true")
				div.dropdown-menu
					a.dropdown-item(:href="'mailto:?subject=' + thisArticle.title + '&body=https://www.totalliberationisrael.com/article/' + thisArticle._id")
						i.fa.fa-envelope-o.bottom-icon(aria-hidden="true")
					a.dropdown-item.fb-xfbml-parse-ignore(
						target="_blank" 
						:href="'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.totalliberationisrael.com%2Farticle%2F' + thisArticle._id + '&amp;src=sdkpreparse'"
					)
						i.fa.fa-facebook-square.bottom-icon(aria-hidden="true")
					a.dropdown-item(
						:href="'https://api.whatsapp.com/send?text=https://www.totalliberationisrael.com/article/' + thisArticle._id" 
						data-action="share/whatsapp/share" 
						target="_blank"
					)
						i.fa.fa-whatsapp.bottom-icon(aria-hidden="true")
	div.additional-articles-container(v-if="thisArticle.title")
		hr.myHr
		h4 כתבות נוספות
		hr.myHr    
		div.container.additional-articles.w-75
			div.row.align-items-start(
				v-for="article in articles" 
				:key="article._id" 
				v-if="article._id !== thisArticle._id"
			)
				div.card.mb-r.col
					div.view.overlay.hm-white-slight
						router-link(:to="'/article/' + article._id")
							img.img-fluid(:src="article.image" alt="Card image")
							div.mas
						div.card-body
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
	display:grid;
	grid-template-columns:1fr 2fr 1fr;
	grid-gap:1em;
	grid-auto-rows: minmax(100px, auto);
}
.wrapper > div{
	padding:1em;
}
.main-article img {
	max-height: 300px;
}
.other-articles {
	text-align: center;
}
.other-articles .card-text {
	font-size: 15px;
}
.container.additional-articles {
	padding-top: 10px;
}
.top-icon {
	font-size: 35px !important;
}
.top-facebook-icon {
	padding-right: 50px;
	padding-left: 50px;
}
.fa-facebook-square {
	color: #3b5998;
}
.fa-envelope-o {
	color: #ff3333;
}
.fa-whatsapp {
	color: #25d366;
}
.my-content {
	text-align: right;
	font-size: 17px;
	white-space:pre-wrap;
}
.title, .lead, .date, .main-image, .share-buttons {
	padding-bottom: 20px;
}
.lead {
	font-weight: lighter;
}
.share-buttons {
	padding-top: 10px;
}
.dropdown-share {
	padding-bottom: 20px;  
}
.bottom-icon {
	font-size: 25px;
}
.dropdown-menu {
	text-align: center;
	min-width: 100%;
}
hr.myHr {
	border: 0;
	height: 1px;
	background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
}
</style>