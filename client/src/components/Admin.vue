<template lang="pug">
  div(class="admin")
    div(class="container")
      h1 ניהול מידע
      router-link(class="btn btn-outline-info btn-lg" to="/admin/events") ניהול אירועים
      router-link(class="btn btn-outline-primary btn-lg" to="/admin/articles") ניהול כתבות
      router-link(class="btn btn-outline-secondary btn-lg" to="/admin/investigations") ניהול תחקירים
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
h1 {
  padding: 20px;
}
router-link {
  padding: 20px;
}
</style>