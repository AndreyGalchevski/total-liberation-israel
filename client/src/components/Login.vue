<template>
  <div class="container">
    <h1>התחברות</h1>
    <form @submit.prevent="login({ username, password })">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="שם משתמש" v-model="username">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" placeholder="סיסמה" v-model="password">
      </div>
      <button type="submit">כניסה</button>
    </form>
  </div>
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

<style>
</style>