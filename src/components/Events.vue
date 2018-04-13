<template lang="pug">
	div(class="events" :style="divStyles")
		div(class="container")
			div(v-if="events.length > 0")
				img(v-if="loading" src="../assets/spinner/salma.gif")
				div(v-else class="row")
						div(class="col-md-6 card-deck" v-for="event in events" :key="event._id")
							div(class="card mb-r")
								div(class="view overlay hm-white-slight")
									img(class="card-img-top" :src="event.image" alt="Card image")
									a(:href="event.fbPage" class="card-link" target="_blank")
										div(class="mask")
								div(class="card-body")
									h4(class="card-title") {{ event.title }}
									p(class="card-text text-primary") {{ getDate(event.date) }}
									p(class="card-text") {{ event.description }}
								div(class="card-footer")
									a(:href="event.fbPage" class="card-link" target="_blank")
										i(class="fa fa-facebook-official")
			div(v-else)
				div(
					:class="messageClasses"
				)
					p.
						לא נמצאו אירועים קרובים.
						בינתיים אתם מוזמנים לבקר בעמוד הפייסבוק שלנו
				no-ssr
					div
						fb-page-preview(
							:loading="loading"
						)
</template>

<script>
import fbPagePreview from './FbPagePreview'
import NoSSR from 'vue-no-ssr'
var moment = require('moment')
export default {
	asyncData ({ store, route }) {
		return store.dispatch('getEvents')
	},
	name: 'events',
	components: {
		fbPagePreview,
		'no-ssr': NoSSR
	},
	data () {
		return {
			loading: false,
			backgroundColor: '#0099ff',
			size: '100px',
			divStyles: {
				'overflow-y': 'hidden'
			},
			messageClasses: {
				'fade-out': false,
				'hidden-div': false
			}
		}
	},
	mounted () {
		this.getEvents()

		setTimeout(() => {
			this.messageClasses['fade-out'] = true
		}, 3000)

		setTimeout(() => {
			this.messageClasses['hidden-div'] = true
		}, 4500)
	},
	methods: {
		async getEvents () {
			this.loading = true
			await this.$store.dispatch('getEvents')
			if (this.events && this.events.length > 0) this.divStyles['overflow-y'] = 'scroll'
			this.loading = false
		},
		getDate: function (date) {
			return moment(date).format('DD.MM.YYYY')
		}
	},
	computed: {
		events () {
			return this.$store.getters.events
		}
	},
	destroyed () {
		this.$store.commit('CLEAR_EVENTS')
	},
	metaInfo: {
		title: 'אירועים קרובים'
	}
}
</script>

<style scoped>
.container {
	padding-top: 20px;
}
.events {
	width: 100%;
}
.card-footer {
	background-color: #ffffff;
}
.fa-facebook-official {
	font-size: 30px;
}

.fade-out {
	animation: FADE_OUT 1.5s ease;
	animation-fill-mode: forwards;
}

.hidden-div {
	display: none;
}

@keyframes FADE_OUT {
	0% {
		opacity: 100;
	}
	100% {
		opacity: 0;
	}
}

</style>