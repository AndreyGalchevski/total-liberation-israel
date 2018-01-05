<template lang="pug">
  div(class="container")
    br
    i(v-show="loading" class="fa fa-spinner fa-spin text-secondary")
    h1 אירוע חדש
    div(class="form")
      div(class="form-group")
        input(type="text" name="title" class="form-control" placeholder="כותרת" v-model="title")
      div(class="form-group")
        input(type="date" name="תאריך" class="form-control" v-model="date")
      div(class="form-group")
        textarea(rows="6" class="form-control" placeholder="תיאור" v-model="description")
      div(class="form-group")
        input(type="text" class="form-control" placeholder="אירוע בפייסבוק" v-model="fbPage")
      div(class="form-group")
        input(class="btn btn-default" type="file" accept=".jpg,.png" @change="changeImage")
      div
        button(class="btn btn-primary" @click="addEvent") הוספה
</template>

<script>
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
      if (!this.title || !this.date || !this.description || !this.fbPage || !this.image) {
        alert('נא למלא את כל השדות')
      } else {
        this.loading = true
        await this.$store.dispatch('addEvent', {
          title: this.title,
          date: this.date,
          description: this.description,
          fbPage: this.fbPage,
          image: this.image
        })
        this.$router.push({ name: 'ManageEvents' })
        this.loading = false
      }
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
textarea {
  height: auto;
}
</style>