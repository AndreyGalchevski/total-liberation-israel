<template lang="pug">
div.admin
	div.container
		h3 ניהול מידע
		router-link.btn(to="/admin/events") ניהול אירועים
		router-link.btn.purple.lighten-2(to="/admin/articles") ניהול כתבות
		router-link.btn.pink.lighten-2(to="/admin/investigations") ניהול תחקירים
		router-view
</template>

<script>
export default {
	name: 'admin',
	metaInfo: {
		title: 'ניהול מידע'
	}
}
</script>
<style scoped>
.admin {
  padding-bottom: 100px;
}
a {
	margin: 20px;
}
</style>