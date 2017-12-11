<template>
  <div class="container">
    <br>
    <h1>עריכת אירוע</h1>
    <div class="form">
      <div class="form-group">
        <input type="text" name="title" class="form-control" placeholder="כותרת" v-model="title">
      </div>
      <div class="form-group">
        <input type="date" name="תאריך" class="form-control" v-model="date">
      </div>
      <div class="form-group">
        <textarea rows="5" class="form-control" placeholder="תיאור" v-model="description"></textarea>
      </div>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="אירוע בפייסבוק" v-model="fbPage"></textarea>
      </div>
      <div class="form-group">
        <input class="btn btn-default" type="file" accept=".jpg,.png" @change="changeImage"></input>
      </div>
      <div class="form-group">
        <img class="img-thumbnail" :src = "image" width="300" height="200" alt="Card image">
      </div>
      <div>
        <button class="btn btn-primary" @click="updateEvent">עכדון</button>
      </div>
    </div>
</div>
</template>

<script>
import EventsService from '@/services/EventsService'
export default {
  name: 'EditEvent',
  data () {
    return {
      image: '',
      title: '',
      date: '',
      description: '',
      fbPage: '',
      newImage: ''
    }
  },
  mounted () {
    this.getEvent()
  },
  methods: {
    async getEvent () {
      const response = await EventsService.getEvent({
        id: this.$route.params.id
      })
      this.image = response.data.image
      this.title = response.data.title
      this.date = response.data.date
      this.description = response.data.description
      this.fbPage = response.data.fbPage
    },
    async updateEvent () {
      const response = await EventsService.updateEvent({
        id: this.$route.params.id,
        title: this.title,
        date: this.date,
        description: this.description,
        fbPage: this.fbPage
      })
      if (response.data.success && this.newImage) {
        await EventsService.uploadEventImage({
          id: this.$route.params.id,
          image: this.newImage
        })
      }
      this.$router.push({ name: 'ManageEvents' })
    },
    changeImage (event) {
      if (event.target.files[0]) {
        this.newImage = event.target.files[0]
        this.image = this.newImage
      }
    }
  },
  metaInfo: {
    title: 'עריכת אירוע'
  }
}
</script>
<style>
</style>