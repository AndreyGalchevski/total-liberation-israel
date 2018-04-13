<template lang="pug">
  div(class="events")
    div(class="container")
      i(v-show="loading" class="fa fa-spinner fa-spin text-secondary")
      div(v-if="events.length > 0")
        div(class="new-event")
          router-link(v-bind:to="{ name: 'NewEvent' }" class="btn btn-default") אירוע חדש
        div(class="table-responsive")
          table(class="table table")
            thead(class="bg-light")
              tr
                td כותרת
                td תאריך
                td פעולה
            tbody
              tr(v-for="event in events" :key="event._id")
                td {{ event.title }}
                td {{ getDate(event.date) }}
                td
                  router-link(v-bind:to="{ name: 'EditEvent', params: { id: event._id } }") עריכה | 
                  a(href="#" @click="deleteEvent(event._id)") מחיקה
      div(v-else)
        h4 אין אירועים להצגה
        router-link(v-bind:to="{ name: 'NewEvent' }" class="btn btn-primary") הוספת אירוע
</template>

<script>
var moment = require('moment')
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