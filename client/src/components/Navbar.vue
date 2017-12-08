<template>
  <div class="container">
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
    <a class="navbar-brand" href="#">
      <img src="../assets/logo/trans.png">
    </a>
    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#myNavbar">
      <span class="navbar-toggler-icon"></span>                        
    </button>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="navbar-nav">
        <!--Tabs-->
        <li class="nav-item">
          <router-link class="nav-link" to="/">ראשי</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/events">אירועים קרובים</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/articles">מאמרים</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/glasswalls">קירות שקופים</router-link>
        </li>
      </ul>
        <!--Social links-->
      <ul class="navbar-nav mr-auto">
        <li class="nav-item social-links-icon">
          <a href="https://www.facebook.com/Alfront">
            <i class="fa fa-facebook my-icon"></i>
          </a>
        </li>          
        <li class="nav-item social-links-icon">
          <a href="https://www.instagram.com/alf_israel">
            <i class="fa fa fa-instagram my-icon"></i>
          </a>
        </li>
        <li class="nav-item social-links-icon">
          <a href="https://www.youtube.com/user/GlassWallsIsrael">
            <i class="fa fa-youtube-square my-icon"></i>
          </a>
        </li>
        <li class="nav-item fb-share-btn">
          <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FAlfront&width=50&layout=button_count&action=like&size=small&show_faces=false&share=false&height=21&appId" 
            width="100" height="21" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true">
          </iframe>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/login" v-if="!isLoggedIn">התחברות</router-link>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" v-if="isLoggedIn" @click="logout">יציאה</a> 
        </li>
      </ul>
    </div>
  </nav>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  },
  computed: {
    isLoggedIn () {
      return this.$store.getters.isLoggedIn
    }
  }
}
</script>
<style scoped>
.navbar-brand img {
  height: 80px;
}

.navbar {
  padding-top: 0px;
  padding-bottom: 0px;
}
.social-links-icon {
  padding-top: 2px; 
  padding-left:10px; 
  padding-right: 10px;
}
.fb-share-btn {
  padding-top: 10px; 
  padding-left: 30px;
}
.my-icon {
  font-size: 35px;
  color: #b3b3b3;
}
</style>