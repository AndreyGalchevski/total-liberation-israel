<template lang="pug">
div.articles
	div.container
		loader(v-if="loading")
		div.row(v-else)
			div.col.s12.m6(v-for="article in articles" :key="article._id")
				div.card.hoverable
					div.card-image
						img(:src="article.image" alt="Card image")
						router-link.btn-floating.btn-large.halfway-fab.waves-effect.waves-light.red(:to="'/article/' + article._id") קרא עוד
					div.card-content
						span.card-title {{ article.title }}
						p {{ article.lead }}
</template>

<script>
import Loader from './Loader'
export default {
	name: 'articles',
	components: {
		Loader
	},
	asyncData ({ store, route }) {
		return store.dispatch('getArticles')
	},
	data () {
		return {
			loading: false,
			backgroundColor: '#0099ff',
			size: '100px'
		}
	},
	mounted () {
		this.getArticles()
	},
	methods: {
		async getArticles () {
			this.loading = true
			await this.$store.dispatch('getArticles')
			this.loading = false
		}
	},
	computed: {
		articles () {
			return this.$store.getters.articles
		}
	},
	destroyed () {
		this.$store.commit('CLEAR_ARTICLES')
	},
	metaInfo: {
		title: 'כתבות'
	}
}
</script>

<style scoped>
.container {
	margin-bottom: 60px;
}
.card-content p {
	color: #757575;
}
.card {
	height: 33em;
}
/* .card{
  width: 1200px;
  min-height: 100px;
  height: auto;
  margin: 80px auto 0px auto;
  background-color: black;
  padding: 10px 10px; 
  overflow:auto
} */
</style>