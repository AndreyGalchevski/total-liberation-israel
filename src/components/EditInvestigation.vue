<template lang="pug">
div.editInvestigation
	div.container
		i.fa.fa-spinner.fa-spin.text-secondary(v-show="loading")
		h1 עריכת תחקיר
		div.form
			div.form-group
				input.form-control(
					type="text" 
					placeholder="שם" 
					v-model="name"
				)
			div.form-group
				input.form-control(
					type="number" 
					placeholder="קו רוחב" 
					v-model="latitude"
				)
			div.form-group
				input.form-control(
					type="number" 
					placeholder="קו גובה" 
					v-model="longitude"
				)
			div.form-group
				input.form-control(
					type="text" 
					placeholder="קישור" 
					v-model="url"
				)
			div
				button.btn.btn-primary(@click="saveInvestigation") שמירה
</template>

<script>
export default {
	name: 'EditInvestigation',
	props: ['isNew'],
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
		if (!this.isNew) {
			this.getInvestigation()
		}
	},
	methods: {
		async getInvestigation () {
			this.loading = true
			await this.$store.dispatch('getInvestigation', this.$route.params.id)
			const { name, latitude, longitude, url } = this.$store.getters.investigation
			this.name = name
			this.latitude = latitude
			this.longitude = longitude
			this.url = url
			this.loading = false
		},
		async saveInvestigation () {
			if (!this.name || !this.latitude || !this.longitude || !this.url) {
				window.alert('נא למלא את כל השדות')
			} else {
				this.loading = true
				const { name, latitude, longitude, url } = this
				const investigationData = { name, latitude, longitude, url }

				if (this.isNew) {
					await this.$store.dispatch('addInvestigation', investigationData)
				} else {
					investigationData.id = this.$route.params.id
					await this.$store.dispatch('updateInvestigation', investigationData)
				}

				this.$router.push({ name: 'ManageInvestigations' })
				this.loading = false
			}
		}
	},
	metaInfo: {
		title: 'עריכת תחקיר'
	}
}
</script>
<style scoped>
textarea {
	height: auto;
}
h1 {
	padding: 20px;
}
</style>