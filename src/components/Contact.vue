<template lang="pug">
div.container
	h3 צור קשר
	div.row
		div.col.m3
		div.col.s12.m6
			div.input-field
				input(
					id="subject" 
					type='text' 
					v-model="subject"
					required
				)
				label(for="subject") נושא הפנייה
			div.input-field
				input(
					id="body"
					type='text' 
					v-model="body" 
					required
				)
				label(for="body") במה נוכל לעזור?
	a.waves-effect.waves-light.btn(
		:href="sendEmail" 
		@click="redirect"
	) שלח
		i.material-icons.left send
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