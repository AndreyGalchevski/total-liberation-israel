<template lang="pug">
div.container
	form(@submit.prevent="login({ username, password })")
		h2 התחברות
		div.form-group
				input.form-control(
					type="text" 
					placeholder="שם משתמש" 
					v-model="username"
				)
		div(class="form-group")
				input.form-control(
					type="password" 
					placeholder="סיסמה" 
					v-model="password"
				)
		div(class="text-center")
				button.btn.btn-default(type="submit") כניסה
</template>

<script>
export default {
	name: 'login',
	data () {
		return {
			username: '',
			password: ''
		}
	},
	methods: {
		login () {
			this.$store.dispatch('login', {
				username: this.username,
				password: this.password
			}).then(() => {
				this.$router.push('/admin')
			})
		}
	},
	metaInfo: {
		title: 'התחברות'
	}
}
</script>

<style scoped>
h2 {
	padding: 20px;
}
</style>