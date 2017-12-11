<template>
    <div class="container">
        <br>
        <h1>ניהול מידע</h1>
        <br>
        <router-link class="btn btn-outline-info btn-lg" to="/admin/events">ניהול אירועים</router-link>
        <router-link class="btn btn-outline-primary btn-lg" to="/admin/articles">ניהול מאמרים</router-link>
        <router-view>
        </router-view>
    </div>
</template>


<script>
export default {
  name: 'admin',
  data () {
  },
  metaInfo: {
    title: 'ניהול מידע'
  }
}
</script>