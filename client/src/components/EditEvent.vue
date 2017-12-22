<template>
  <div class="container">
    <br>
    <i v-show="loading" class="fa fa-spinner fa-spin text-secondary"></i>
    <h1>עריכת אירוע</h1>
    <div class="form">
      <div class="form-group">
        <input type="text" name="title" class="form-control" placeholder="כותרת" v-model="title">
      </div>
      <div class="form-group">
        <input type="date" name="תאריך" class="form-control" v-model="date">
      </div>
      <div class="form-group">
        <textarea rows="6" class="form-control" placeholder="תיאור" v-model="description"></textarea>
      </div>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="אירוע בפייסבוק" v-model="fbPage"/>
      </div>
      <div class="form-group">
        <input class="btn btn-default" type="file" accept=".jpg,.png" @change="changeImage"/>
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
export default {
  name: 'EditEvent',
  data () {
    return {
      image: '',
      title: '',
      date: '',
      description: '',
      fbPage: '',
      newImage: '',
      loading: false
    }
  },
  mounted () {
    this.getEvent()
  },
  methods: {
    async getEvent () {
      this.loading = true
      await this.$store.dispatch('getEvent', this.$route.params.id)
      this.image = this.$store.getters.event.image
      this.title = this.$store.getters.event.title
      this.date = this.$store.getters.event.date
      this.description = this.$store.getters.event.description
      this.fbPage = this.$store.getters.event.fbPage
      this.loading = false
    },
    async updateEvent () {
      this.loading = true
      await this.$store.dispatch('updateEvent', {
        id: this.$route.params.id,
        title: this.title,
        date: this.date,
        description: this.description,
        fbPage: this.fbPage,
        image: this.image,
        newImage: this.newImage
      })
      this.$router.push({ name: 'ManageEvents' })
      this.loading = false
    },
    changeImage (event) {
      this.newImage = event.target.files[0]
    }
  },
  metaInfo: {
    title: 'עריכת אירוע'
  }
}
</script>
<style>
textarea {
  height: auto;
}
</style>