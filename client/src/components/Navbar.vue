<template>
  <div class="container">
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
      <router-link class="navbar-brand" to="/">
        <img src="../assets/logo/logo.png">
      </router-link>
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
            <a href="https://www.glass-walls.com/" class="nav-link" target="_blank">קירות שקופים</a>
          </li>
          <li class="nav-item">
            <a href="https://www.glass-walls.com/%D7%97%D7%A0%D7%95%D7%AA/" class="nav-link" target="_blank">חנות</a>
          </li>
          <li class="nav-item">
            <a href="https://www.glass-walls.com/%D7%AA%D7%A8%D7%95%D7%9E%D7%94/" class="nav-link" target="_blank">תרומה</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">צור קשר</router-link>
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
        </ul>
      </div>
    </nav>
    <!--Footer-->
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-bottom">
      <ul class="navbar-nav" style="padding-right: 0px">
        <li class="nav-item">
          <a class="nav-link">&#169; 2017 החזית לשחרור בעלי חיים ישראל</a>
        </li>
      </ul>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/login" v-if="!isLoggedIn">התחברות</router-link>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" v-if="isLoggedIn" @click="logout">יציאה</a> 
        </li>
      </ul>
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
  padding-top: 5px; 
  padding-left:10px; 
  padding-right: 10px;
}
.fb-share-btn {
  padding-top: 10px; 
  padding-left: 25px;
}
.my-icon {
  font-size: 30px;
  color: #b3b3b3;
}
.fixed-bottom {
  font-size: 12px;
}
</style>