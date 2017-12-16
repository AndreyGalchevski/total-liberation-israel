<template>
  <div class="container">
    <form @submit.prevent="login({ username, password })">
    <br>
    <h2>התחברות</h2>

    <div class="form-group">
        <input type="text" class="form-control" placeholder="שם משתמש" v-model="username">
    </div>

    <div class="form-group">
        <input type="password" class="form-control" placeholder="סיסמה" v-model="password">
    </div>

    <div class="text-center">
        <button type="submit" class="btn btn-default">כניסה</button>
    </div>
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