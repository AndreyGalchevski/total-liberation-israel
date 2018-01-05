<template lang="pug">
  div(class="container")
    br
    i(v-show="loading" class="fa fa-spinner fa-spin text-secondary")
    h1 תחקיר חדש
    div(class="form")
      div(class="form-group")
        input(type="text" class="form-control" placeholder="שם" v-model="name")
      div(class="form-group")
        input(type="number" class="form-control" placeholder="קו רוחב" v-model="latitude")
      div(class="form-group")
        input(type="number" class="form-control" placeholder="קו גובה" v-model="longitude")
      div(class="form-group")
        input(type="text" class="form-control" placeholder="קישור" v-model="url")
      div
        button(class="btn btn-primary" @click="addInvestigation") הוספה
</template>

<script>
export default {
  name: 'NewInvestigation',
  data () {
    return {
      name: '',
      latitude: '',
      longitude: '',
      url: '',
      loading: false
    }
  },
  methods: {
    async addInvestigation () {
      if (!this.name || !this.latitude || !this.longitude || !this.url) {
        alert('נא למלא את כל השדות')
      } else {
        this.loading = true
        await this.$store.dispatch('addInvestigation', {
          name: this.name,
          latitude: this.latitude,
          longitude: this.longitude,
          url: this.url
        })
        this.$router.push({ name: 'ManageInvestigations' })
        this.loading = false
      }
    }
  },
  metaInfo: {
    title: 'תחקיר חדש'
  }
}
</script>
<style>
textarea {
  height: auto;
}
</style>