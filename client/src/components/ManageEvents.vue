<template>
  <div class="container">
    <div class="events">
      <br>
      <i v-show="loading" class="fa fa-spinner fa-spin text-secondary"></i>
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
                <td>פעולה</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="event in events" :key="event._id">
                <td>{{ event.title }}</td>
                <td>{{ getDate(event.date) }}</td>
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
  metaInfo: {
    title: 'ניהול אירועים'
  }
}
</script>

<style scoped>
</style>