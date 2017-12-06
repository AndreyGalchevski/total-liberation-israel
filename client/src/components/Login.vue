<template>
  <div class="container">
    <div class="articles">
        <h1>התחברות</h1>
        <div class="form">
            <div class="form-group">
                <input type="text" name="username" class="form-control" placeholder="שם משתמש" v-model="username">
            </div>
            <div class="form-group">
                <input type="text" name = "password "class="form-control" placeholder="סיסמה" v-model="password"></textarea>
            </div>
            <div>
                <button class="btn btn-primary" @click="login">עכדון</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
// import AuthService from '@/services/AuthService'
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login: function () {
        // check if username is in the users table and if yes then check if password matches
        // if there is a match then sign the user with token
    }
  }
}
</script>

<style>
</style>