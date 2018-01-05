<template lang="pug">
  div(class="container")
    br
    h1 ניהול מידע
    br
    router-link(class="btn btn-outline-info btn-lg" to="/admin/events") ניהול אירועים
    router-link(class="btn btn-outline-primary btn-lg" to="/admin/articles") ניהול מאמרים
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