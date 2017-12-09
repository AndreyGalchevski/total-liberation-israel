<template>
  <div class="container">
    <div class="events">
      <br>
      <div v-if="events.length > 0">
        <div>
          <router-link v-bind:to="{ name: 'NewEvent' }" class="btn btn-danger">אירוע חדש</router-link>
        </div>
        <br>
        <div class="table-responsive">
          <table class="table table">
            <thead class="bg-light">
              <tr>
                <td>כותרת</td>
                <td>תאריך</td>
                <td>אירוע בפייסבוק</td>
                <td>פעולה</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="event in events">
                <td>{{ event.title }}</td>
                <td>{{ getDate(event.date) }}</td>
                <td><a :href="event.fbPage">קישור</a></td>
                <td>
                  <router-link v-bind:to="{ name: 'EditEvent', params: { id: event._id } }">עריכה</router-link> |
                  <a href="#" @click="deleteEvent(event._id)">מחיקה</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div v-else>
        <br>
        <h4>אין אירועים להצגה</h4>
        <br>
        <router-link v-bind:to="{ name: 'NewEvent' }" class="btn btn-primary">הוספת אירוע</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import EventsService from '@/services/EventsService'
var moment = require('moment')
export default {
  name: 'ManageEvents',
  data () {
    return {
      events: []
    }
  },
  mounted () {
    this.getEvents()
  },
  methods: {
    async getEvents () {
      const response = await EventsService.fetchEvents()
      this.events = response.data.events
    },
    async deleteEvent (id) {
      await EventsService.deleteEvent(id)
      this.getEvents()
      this.$router.push({ name: 'ManageEvents' })
    },
    getDate: function (date) {
      return moment(date).format('DD-MM-YYYY')
    }
  }
}
</script>

<style scoped>
</style>