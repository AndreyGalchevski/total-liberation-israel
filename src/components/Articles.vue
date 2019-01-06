<template lang="pug">
div.articles
	div.container
		img(v-if="loading" src="../assets/spinner.gif")
		div.row(v-else)
			div.col-md-6.card-deck(v-for="article in articles" :key="article._id")
				div.card.mb-r
					div.view.overlay.hm-white-slight
						img.img-fluid(:src="article.image" alt="Card image")
						router-link(:to="'/article/' + article._id")
							div.mask
					div.card-body
						h4.card-title {{ article.title }}
						p.card-text {{ article.lead }}
					div.card-footer
						router-link.btn.btn-primary(:to="'/article/' + article._id") קרא עוד
</template>

<script>
export default {
	name: 'articles',
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
.articles {
	width: 100%;
}
.img-fluid {
	margin: 0 auto;  
}
.card-footer {
	background-color: #ffffff;
}
</style>