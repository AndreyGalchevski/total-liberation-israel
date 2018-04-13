<template lang="pug">
  div(class="investigations")
    div(class="container")
      i(v-show="loading" class="fa fa-spinner fa-spin text-secondary")
      div(v-if="investigations.length > 0")
        div(class="new-investigation")
          router-link(v-bind:to="{ name: 'NewInvestigation' }" class="btn btn-secondary") תחקיר חדש
        div(class="table-responsive")
          table(class="table table")
            thead(class="bg-light")
              tr
                td שם
                td פעולה
            tbody
              tr(v-for="investigation in investigations" :key="investigation._id")
                td {{ investigation.name }}
                td
                  router-link(v-bind:to="{ name: 'EditInvestigation', params: { id: investigation._id } }") עריכה | 
                  a(href="#" @click="deleteInvestigation(investigation._id)") מחיקה
      div(v-else)
        h4 אין תחקירים להצגה
        router-link(v-bind:to="{ name: 'NewInvestigation' }" class="btn btn-primary") הוספת תחקיר
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
	destroyed () {
		this.$store.commit('CLEAR_INVESTIGATIONS')
	},
	metaInfo: {
		title: 'ניהול תחקירים'
	}
}
</script>

<style scoped>
.investigations {
  width: 100%;
}
.new-investigation {
  padding-top: 20px;
}
.table-responsive {
  padding: 20px;
}
</style>