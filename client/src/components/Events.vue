<template>
  <div class="container">
    <div class="events">
      <br>
      <div class="row">
        <div class="col-md-4" v-for="event in events">
          <div class="card">
            <img class="card-img-top" :src="event.image" alt="Card image">
            <div class="card-body">
              <h4 class="card-title">{{ event.title }}</h4>
              <p class="card-text">{{ getDate(event.date) }}</p>
              <p class="card-text">{{ event.description }}</p>
              <a :href="event.fbPage" class="card-link">עמוד האירוע בפייסבוק</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventsService from '@/services/EventsService'
var moment = require('moment')
export default {
  name: 'events',
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
    getDate: function (date) {
      return moment(date).format('DD-MM-YYYY')
    }
  }
}
</script>

<style>
</style>