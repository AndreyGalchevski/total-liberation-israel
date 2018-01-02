<template>
  <div class="container">
    <div class="investigations">
      <br>
      <i v-show="loading" class="fa fa-spinner fa-spin text-secondary"></i>
      <div v-if="investigations.length > 0">
        <div>
          <router-link v-bind:to="{ name: 'NewInvestigation' }" class="btn btn-danger">תחקיר חדש</router-link>
        </div>
        <br>
        <div class="table-responsive">
          <table class="table table">
            <thead class="bg-light">
              <tr>
                <td>שם</td>
                <td>פעולה</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="investigation in investigations" :key="investigation._id">
                <td>{{ investigation.name }}</td>
                <td>
                  <router-link v-bind:to="{ name: 'EditInvestigation', params: { id: investigation._id } }">עריכה</router-link> |
                  <a href="#" @click="deleteInvestigation(investigation._id)">מחיקה</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div v-else>
        <br>
        <h4>אין תחקירים להצגה</h4>
        <br>
        <router-link v-bind:to="{ name: 'NewInvestigation' }" class="btn btn-primary">הוספת תחקיר</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ManageInvestigations',
  data () {
    return {
      loading: false
    }
  },
  mounted () {
    this.getInvestigations()
  },
  methods: {
    async getInvestigations () {
      this.loading = true
      await this.$store.dispatch('getInvestigations')
      this.loading = false
    },
    async deleteInvestigation (id) {
      this.loading = true
      await this.$store.dispatch('deleteInvestigation', id)
      this.getInvestigations()
      this.$router.push({ name: 'ManageInvestigations' })
      this.loading = true
    }
  },
  computed: {
    investigations () {
      return this.$store.getters.investigations
    }
  },
  metaInfo: {
    title: 'ניהול תחקירים'
  }
}
</script>

<style scoped>
</style>