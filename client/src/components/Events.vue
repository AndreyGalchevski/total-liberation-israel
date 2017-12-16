<template>
  <div class="container">
    <br>
    <i v-show="loading" class="fa fa-spinner fa-spin text-secondary"></i>
    <div class="row">
      <div class="col-md-4 card-deck" v-for="event in events">
        <div class="card mb-r">
          <div class="view overlay hm-white-slight">
            <img class="card-img-top" :src="event.image" alt="Card image">
            <a :href="event.fbPage" class="card-link">
              <div class="mask"></div>
            </a>
          </div>
          <div class="card-body">
            <h4 class="card-title">{{ event.title }}</h4>
            <p class="card-text text-primary">{{ getDate(event.date) }}</p>
            <p class="card-text">{{ event.description }}</p>
          </div>
          <div class="card-footer">
            <a :href="event.fbPage" class="card-link">לדף האירוע ב- <i class="fa fa-facebook-official"></i></a>
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
      events: [],
      loading: false
    }
  },
  mounted () {
    this.getEvents()
  },
  methods: {
    async getEvents () {
      this.loading = true
      const response = await EventsService.fetchEvents()
      this.events = response.data.events
      this.loading = false
    },
    getDate: function (date) {
      return moment(date).format('DD-MM-YYYY')
    }
  },
  metaInfo: {
    title: 'אירועים קרובים'
  }
}
</script>

<style>
.card-footer {
  background-color: #ffffff;
}
</style>