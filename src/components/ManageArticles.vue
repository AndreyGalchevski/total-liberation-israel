<template lang="pug">
div.articles
	div.container
		i.fa.fa-spinner.fa-spin.text-secondary(v-show="loading")
		div(v-if="articles.length > 0")
			div.new-article
				router-link.btn.purple.lighten-2(v-bind:to="{ name: 'NewArticle' }") כתבה חדשה
			table.striped.centered.responsive-table
				thead
					tr
						th כותרת
						th תאריך
						th פעולה
				tbody
					tr(v-for="article in articles" :key="article._id")
						td {{ article.title }}
						td {{ formatDate(article.date) }}
						td
							router-link(v-bind:to="{ name: 'EditArticle', params: { id: article._id } }") עריכה | 
							a(href="#" @click="deleteArticle(article._id)") מחיקה
		div(v-else)
			h4 אין כתבות להצגה
			router-link.btn.purple.lighten-2(v-bind:to="{ name: 'NewArticle' }") הוספת כתבה
</template>

<script>
import moment from 'moment'
export default {
	name: 'ManageArticles',
	data () {
		return {
			loading: false
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
		},
		async deleteArticle (id) {
			this.loading = true
			await this.$store.dispatch('deleteArticle', id)
			this.getArticles()
			this.$router.push({ name: 'ManageArticles' })
			this.loading = false
		},
		formatDate (date) {
			return moment(date).format('DD.MM.YYYY')
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
		title: 'ניהול כתבות'
	}
}
</script>

<style scoped>
.articles {
	width: 100%;
}
.new-article {
	margin-top: 40px;
}
table {
	margin-top: 40px;
}
</style>