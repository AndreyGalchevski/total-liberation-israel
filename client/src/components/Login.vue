<template>
  <div class="container">
    <h1>התחברות</h1>
    <form @submit.prevent="login({ email, password })">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="שם משתמש" v-model="username">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" placeholder="סיסמה" v-model="password">
      </div>
      <button type="submit">Login</button>
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
        email: this.email,
        password: this.password
      }).then(() => {
        this.$router.push('/')
      })
    }
  }
}
</script>

<style>
</style>