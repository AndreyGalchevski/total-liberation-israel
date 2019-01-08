<template lang="pug">
div.articles
	div.container
		loader(v-if="loading")
		div.row(v-else)
			div.col.s12.m6(v-for="article in articles" :key="article._id")
				div.card.hoverable
					div.card-image
						router-link(:to="'/article/' + article._id")
							img(:src="article.image" alt="Card image")
					div.card-content
						span.card-title {{ article.title }}
						p {{ article.lead }}
					div.card-action
						router-link(:to="'/article/' + article._id") קרא עוד
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
	padding-top: 20px;
}
.card-content p {
	color: #757575;
}
</style>