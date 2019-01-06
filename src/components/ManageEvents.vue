<template lang="pug">
div.events
	div.container
		i.fa.fa-spinner.fa-spin.text-secondary(v-show="loading")
		div(v-if="events.length > 0")
			div.new-event
				router-link.btn.btn-default(v-bind:to="{ name: 'NewEvent' }") אירוע חדש
			div.table-responsive
				table.table.table
					thead.bg-light
						tr
							td כותרת
							td תאריך
							td פעולה
					tbody
						tr(v-for="event in events" :key="event._id")
							td {{ event.title }}
							td {{ formatDate(event.date) }}
							td
								router-link(v-bind:to="{ name: 'EditEvent', params: { id: event._id } }") עריכה | 
								a(href="#" @click="deleteEvent(event._id)") מחיקה
		div(v-else)
			h4 אין אירועים להצגה
			router-link.btn.btn-primary(v-bind:to="{ name: 'NewEvent' }") הוספת אירוע
</template>

<script>
import moment from 'moment'
export default {
	name: 'ManageEvents',
	data () {
		return {
			loading: false
		}
	},
	mounted () {
		this.getEvents()
	},
	methods: {
		async getEvents () {
			this.loading = true
			await this.$store.dispatch('getEvents')
			this.loading = false
		},
		async deleteEvent (id) {
			this.loading = true
			await this.$store.dispatch('deleteEvent', id)
			this.getEvents()
			this.$router.push({ name: 'ManageEvents' })
			this.loading = true
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
		title: 'ניהול אירועים'
	}
}
</script>

<style scoped>
.events {
	width: 100%;
}
.new-event {
	padding-top: 20px;
}
.table-responsive {
	padding: 20px;
}
</style>