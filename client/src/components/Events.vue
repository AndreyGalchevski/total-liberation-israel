<template lang="pug">
  div(class="events")
    div(class="container")
      br
      double-bounce(v-show="loading" :background="backgroundColor" :size="size")
      div(class="row")
        div(class="col-md-4 card-deck" v-for="event in events" :key="event._id")
          div(class="card mb-r")
            div(class="view overlay hm-white-slight")
              img(class="card-img-top" :src="event.image" alt="Card image")
              a(:href="event.fbPage" class="card-link")
                div(class="mask")
            div(class="card-body")
              h4(class="card-title") {{ event.title }}
              p(class="card-text text-primary") {{ getDate(event.date) }}
              p(class="card-text") {{ event.description }}
            div(class="card-footer")
              a(:href="event.fbPage" class="card-link")
                i(class="fa fa-facebook-official")
</template>

<script>
import DoubleBounce from 'vue-loading-spinner/src/components/DoubleBounce'
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
    DoubleBounce
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
.events {
  width: 100%;
}
.card-footer {
  background-color: #ffffff;
}
.fa-facebook-official {
  font-size: 30px;
}
</style>