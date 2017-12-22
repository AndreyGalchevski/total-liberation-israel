<template>
  <div class="container">
    <br>
    <rotate-square3 v-show="loading" :color="backgroundColor" :size="size" ></rotate-square3>
    <div class="row">
      <div class="col-md-4 card-deck" v-for="event in events" :key="event._id">
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
import RotateSquare3 from 'vue-loading-spinner/src/components/RotateSquare3'
var moment = require('moment')
export default {
  name: 'events',
  data () {
    return {
      loading: false,
      backgroundColor: '#0099ff',
      size: '100px'
    }
  },
  components: {
    RotateSquare3
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

<style>
.card-footer {
  background-color: #ffffff;
}
</style>