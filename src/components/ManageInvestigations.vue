<template lang="pug">
div.investigations
	div.container
		i.fa.fa-spinner.fa-spin.text-secondary(v-show="loading")
		div(v-if="investigations.length > 0")
			div.new-investigation
				router-link.btn.btn-secondary(v-bind:to="{ name: 'NewInvestigation' }") תחקיר חדש
			div.table-responsive
				table.table.table
					thead.bg-light
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
			router-link.btn.btn-primary(v-bind:to="{ name: 'NewInvestigation' }") הוספת תחקיר
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