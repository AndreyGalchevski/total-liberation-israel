<template lang="pug">
  div(class="events")
    div(class="container")
      img(v-if="loading" src="../assets/spinner/salma.gif")
      div(v-else class="row")
        div(class="col-md-4 card-deck" v-for="event in events" :key="event._id")
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
</template>

<script>
var moment = require('moment')
export default {
  asyncData ({ store, route }) {
    return store.dispatch('getEvents')
  },
  name: 'events',
  data () {
    return {
      loading: false,
      backgroundColor: '#0099ff',
      size: '100px'
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
</style>