<template>
  <div class="container">
    <br>
    <i v-show="loading" class="fa fa-spinner fa-spin text-secondary"></i>
    <h1>אירוע חדש</h1>
    <div class="form">
      <div class="form-group">
        <input type="text" name="title" class="form-control" placeholder="כותרת" v-model="title"></input>
      </div>
      <div class="form-group">
        <input type="date" name="תאריך" class="form-control" v-model="date">
      </div>
      <div class="form-group">
        <textarea rows="5" class="form-control" placeholder="תיאור" v-model="description"></textarea>
      </div>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="אירוע בפייסבוק" v-model="fbPage"></input>
      </div>
      <div class="form-group">
        <input class="btn btn-default" type="file" accept=".jpg,.png" @change="changeImage"></input>
      </div>
      <div>
        <button class="btn btn-primary" @click="addEvent">הוספה</button>
      </div>
    </div>
</div>
</template>

<script>
import EventsService from '@/services/EventsService'
export default {
  name: 'NewEvent',
  data () {
    return {
      title: '',
      date: '',
      description: '',
      fbPage: '',
      image: '',
      loading: false
    }
  },
  methods: {
    async addEvent () {
      this.loading = true
      const response = await EventsService.addEvent({
        title: this.title,
        date: this.date,
        description: this.description,
        fbPage: this.fbPage
      })

      if (response.data.success) {
        await EventsService.uploadEventImage({
          id: response.data.event._id,
          image: this.image
        })
      }

      this.$router.push({ name: 'ManageEvents' })
      this.loading = false
    },

    changeImage (event) {
      this.image = event.target.files[0]
    }
  },
  metaInfo: {
    title: 'אירוע חדש'
  }
}
</script>
<style>
</style>