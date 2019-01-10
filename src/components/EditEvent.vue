<template lang="pug">
div.editEvent
	div.container
		i.fa.fa-spinner.fa-spin.text-secondary(v-show="loading")
		h4 עריכת אירוע
		div.form
			div.form-group
				input.form-control(
					type="text" 
					name="title" 
					placeholder="כותרת" 
					v-model="title"
				)
			div.form-group
				input.form-control(
					type="date" 
					name="תאריך" 
					v-model="date"
				)
			div.form-group
				textarea.form-control(
					rows="6" 
					placeholder="תיאור" 
					v-model="description"
				)
			div.form-group
				input.form-control(
					type="text" 
					placeholder="אירוע בפייסבוק" 
					v-model="fbPage"
				)
			div.form-group
				input.btn.btn-default(
					type="file" 
					accept=".jpg,.png" 
					@change="changeImage"
				)
			div.form-group
				img.img-thumbnail(
					v-show="!isNew" 
					:src = "image" 
					width="300" 
					height="200" 
					alt="Card image"
				)
			div
				button.btn.btn-primary(@click="saveEvent") שמירה
</template>

<script>
import moment from 'moment'

export default {
	name: 'EditEvent',
	props: ['isNew'],
	data () {
		return {
			title: '',
			date: '',
			description: '',
			fbPage: '',
			image: '',
			newImage: '',
			loading: false
		}
	},
	mounted () {
		if (!this.isNew) {
			this.getEvent()
		}
	},
	methods: {
		async getEvent () {
			this.loading = true
			await this.$store.dispatch('getEvent', this.$route.params.id)
			const { title, date, description, fbPage, image } = this.$store.getters.event
			this.image = image
			this.title = title
			this.date = this.formatDate(date)
			this.description = description
			this.fbPage = fbPage
			this.loading = false
		},
		async saveEvent () {
			if (!this.title || !this.date || !this.description || !this.fbPage) {
				window.alert('נא למלא את כל השדות')
			} else {
				this.loading = true
				const localDate = moment(this.date).startOf('day').toDate()
				const { title, description, fbPage, image } = this
				const eventData = { title, description, fbPage, image, date: localDate }

				if (this.isNew) {
					await this.$store.dispatch('addEvent', eventData)
				} else {
					eventData.id = this.$route.params.id
					eventData.newImage = this.newImage
					await this.$store.dispatch('updateEvent', eventData)
				}

				this.$router.push({ name: 'ManageEvents' })
				this.loading = false
			}
		},
		changeImage (event) {
			if (this.isNew) {
				this.image = event.target.files[0]
			} else {
				this.newImage = event.target.files[0]
			}
		},
		formatDate (date) {
			return moment(date).format('YYYY-MM-DD')
		}
	},
	metaInfo: {
		title: 'עריכת אירוע'
	}
}
</script>
<style>
.container {
  margin-bottom: 100px;
}
textarea {
	height: auto;
}
</style>