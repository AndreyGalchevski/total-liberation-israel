<template lang="pug">
div.events(:style="divStyles")
	div.container
		div(v-if="events.length > 0")
			img(v-if="loading" src="../assets/spinner.gif")
			div.row(v-else)
					div.col-md-6.card-deck(v-for="event in events" :key="event._id")
						div.card.mb-r
							div.view.overlay.hm-white-slight
								img.card-img-top(:src="event.image" alt="Card image")
								a.card-link(:href="event.fbPage" target="_blank")
									div.mask
							div.card-body
								h4.card-title {{ event.title }}
								p.card-text.text-primary {{ formatDate(event.date) }}
								p.card-text {{ event.description }}
							div.card-footer
								a.card-link(:href="event.fbPage" target="_blank")
									i.fa.fa-facebook-official
		div(v-else)
			div(:class="messageClasses")
				p.
					לא נמצאו אירועים קרובים.
					בינתיים אתם מוזמנים לבקר בעמוד הפייסבוק שלנו
			div
				fb-page-preview(:loading="loading")
</template>

<script>
import fbPagePreview from './FbPagePreview'
import moment from 'moment'

export default {
	name: 'events',
	components: {
		fbPagePreview
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