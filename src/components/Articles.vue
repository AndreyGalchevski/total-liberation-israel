<template lang="pug">
div.articles
	div.container
		loader(v-if="loading")
		div.masonry(v-else)
			div.item(v-for="article in articles" :key="article._id")
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

html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

.masonry {
  margin: 1.5em auto;
  max-width: 900px;
  column-gap: 1.5em;
}

.item {
  display: inline-block;
  margin: 0 0 1em;
  width: 100%;
}

@media only screen and (min-width: 1024px) {
  .masonry {
    column-count: 2;
  }
}

@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .masonry {
    column-count: 2;
  }
}

@media only screen and (max-width: 767px) and (min-width: 540px) {
  .masonry {
    column-count: 1;
  }
}
</style>