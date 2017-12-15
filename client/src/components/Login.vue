<template>
  <div class="container">
    <form @submit.prevent="login({ username, password })">
    <p class="h5 text-center mb-4">התחברות</p>

    <div class="md-form">
        <input type="text" id="defaultForm-email" class="form-control" v-model="username">
        <label for="defaultForm-email">שם משתמש</label>
    </div>

    <div class="md-form">
        <input type="password" id="defaultForm-pass" class="form-control" v-model="password">
        <label for="defaultForm-pass">סיסמה</label>
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