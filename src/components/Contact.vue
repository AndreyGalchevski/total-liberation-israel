<template lang="pug">
div.container
	h2 צור קשר
	div.form
		div.form-group
			input.form-control(
				type='text' 
				placeholder='נושא הפנייה'
				oninvalid="this.setCustomValidity('נא להזין נושא הפנייה')"
				oninput="setCustomValidity('')" 
				v-model="subject"
				required
			)
		div.form-group
			input.form-control(
				type='text' 
				placeholder='במה נוכל לעזור?'
				oninvalid="this.setCustomValidity('איך נדע במה לעזור אם לא תגיד/י')"
				oninput="setCustomValidity('')" 
				v-model="body" 
				required
			)
		a(:href="sendEmail" @click="redirect")
			div.btn.btn-primary שלח
</template>

<script>
export default {
	name: 'contact',
	data () {
		return {
			subject: '',
			body: ''
		}
	},
	methods: {
		redirect () {
			this.$router.push({name: 'Home'})
		}
	},
	computed: {
		sendEmail () {
			const unicodedSubject = this.subject.replace(/\?/g, '%3F')
			const unicodedBody = this.body.replace(/\?/g, '%3F')
			return 'mailto:glasswallsisrael@gmail.com?subject=' + unicodedSubject + '&body=' + unicodedBody
		}
	},
	metaInfo: {
		title: 'צור קשר'
	}
}
</script>

<style scoped>
h2 {
	padding: 20px;
}
.scroll {
	overflow-y: initial;
}
</style>