<template lang="pug">
div.events(:style="divStyles")
	div.container
		div(v-if="events.length > 0")
			loader(v-if="loading")
			div.row(v-else)
					div.col.s12.m6(v-for="event in events" :key="event._id")
						div.card.hoverable
							div.card-image
								a.card-link(:href="event.fbPage" target="_blank")
									img(:src="event.image" alt="Card image")
							div.card-content
								span.card-title {{ event.title }}
								p.event-date {{ formatDate(event.date) }}
								p {{ event.description }}
							div.card-action
								a(:href="event.fbPage" target="_blank")
									i.fa.fa-facebook-official
		div(v-else)
			div(:class="messageClasses")
				p.
					לא נמצאו אירועים קרובים.
					בינתיים אתם מוזמנים לבקר בעמוד הפייסבוק שלנו
			no-ssr
				div
					fb-page-preview(:loading="loading")
</template>

<script>
import Loader from './Loader'
import fbPagePreview from './FbPagePreview'
import NoSSR from 'vue-no-ssr'
import moment from 'moment'

export default {
	name: 'events',
	components: {
		Loader,
		'no-ssr': NoSSR,
		fbPagePreview
	},
	asyncData ({ store, route }) {
		return store.dispatch('getEvents')
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
		formatDate (date) {
			return moment(date).locale('he').format('Do בMMMM YYYY')
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
.fa-facebook-official {
	font-size: 30px;
	color: #3b5998;
}

.fade-out {
	animation: FADE_OUT 1.5s ease;
	animation-fill-mode: forwards;
}

.hidden-div {
	display: none;
}

.event-date {
	color: #2962ff;
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