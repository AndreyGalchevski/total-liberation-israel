<template lang="pug">
  div(class="container")
    br
    i(v-show="loading" class="fa fa-spinner fa-spin text-secondary")
    h1 עריכת תחקיר
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
        button(class="btn btn-primary" @click="updateInvestigation") עכדון
</template>

<script>
export default {
  name: 'EditInvestigation',
  data () {
    return {
      name: '',
      latitude: '',
      longitude: '',
      url: '',
      loading: false
    }
  },
  mounted () {
    this.getInvestigation()
  },
  methods: {
    async getInvestigation () {
      this.loading = true
      await this.$store.dispatch('getInvestigation', this.$route.params.id)
      this.name = this.$store.getters.investigation.name
      this.latitude = this.$store.getters.investigation.latitude
      this.longitude = this.$store.getters.investigation.longitude
      this.url = this.$store.getters.investigation.url
      this.loading = false
    },
    async updateInvestigation () {
      this.loading = true
      await this.$store.dispatch('updateInvestigation', {
        id: this.$route.params.id,
        name: this.name,
        latitude: this.latitude,
        longitude: this.longitude,
        url: this.url
      })
      this.$router.push({ name: 'ManageInvestigations' })
      this.loading = false
    }
  },
  metaInfo: {
    title: 'עריכת תחקיר'
  }
}
</script>
<style>
textarea {
  height: auto;
}
</style>