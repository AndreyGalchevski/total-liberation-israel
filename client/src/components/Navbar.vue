<template>
  <div class="container">
    <nav class="navbar navbar-expand-xl navbar-dark elegant-color fixed-top scrolling-navbar">
      <router-link class="navbar-brand" to="/">
        <img src="http://res.cloudinary.com/dqvimfd8b/image/upload/v1514480811/alf-israel/logo/logo2.png">
      </router-link>
      <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#myNavbar">
        <span class="navbar-toggler-icon"></span>                        
      </button>
      <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="navbar-nav">
          <!--Tabs-->
          <li class="nav-item active">
            <router-link class="nav-link grey-text" to="/">ראשי</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link grey-text" to="/About">מי אנחנו</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link grey-text" to="/events">אירועים קרובים</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link grey-text" to="/articles">מאמרים</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link grey-text" to="/investigations">תחקירים</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link grey-text" href="https://www.glass-walls.com/" target="_blank">קירות שקופים</a>
          </li>
          <li class="nav-item">
            <a class="nav-link grey-text" href="https://www.glass-walls.com/%D7%97%D7%A0%D7%95%D7%AA/" target="_blank">חנות</a>
          </li>
          <li class="nav-item">
            <a class="nav-link grey-text" href="https://www.glass-walls.com/%D7%AA%D7%A8%D7%95%D7%9E%D7%94/" target="_blank">תרומה</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link grey-text" to="/contact">צור קשר</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link grey-text" to="/login" v-if="!isLoggedIn">
              התחברות
            </router-link>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link grey-text" v-if="isLoggedIn" @click="logout">
              יציאה
            </a> 
        </li>
        </ul>
        <!--Social links For Mobile-->
        <div class="social-links-mobile d-sm-none">
          <a href="https://www.facebook.com/Alfront" class="social-link-mobile" target="_blank">
              <i class="fa fa-facebook my-icon grey-text"></i>
          </a>
          <a href="https://www.instagram.com/alf_israel" class="social-link-mobile" target="_blank">
              <i class="fa fa fa-instagram my-icon grey-text"></i>
          </a>
          <a href="https://www.youtube.com/user/GlassWallsIsrael" class="social-link-mobile" target="_blank">
              <i class="fa fa-youtube-square my-icon grey-text"></i>
          </a>
          <div class="fb-share-btn">
            <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FAlfront&width=50&layout=button_count&action=like&size=small&show_faces=false&share=false&height=21&appId" 
                width="100" height="21" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true">
            </iframe>
          </div>
        </div>
        <!--Social links For Desktop-->
        <div class="d-none d-md-block mr-auto">
          <ul class="navbar-nav">
            <li class="nav-item social-link-desktop">
              <a href="https://www.facebook.com/Alfront" target="_blank">
                <i class="fa fa-facebook my-icon grey-text"></i>
              </a>
            </li>          
            <li class="nav-item social-link-desktop">
              <a href="https://www.instagram.com/alf_israel" target="_blank">
                <i class="fa fa fa-instagram my-icon grey-text"></i>
              </a>
            </li>
            <li class="nav-item social-link-desktop">
              <a href="https://www.youtube.com/user/GlassWallsIsrael" target="_blank">
                <i class="fa fa-youtube-square my-icon grey-text"></i>
              </a>
            </li>
            <li class="nav-item fb-share-btn">
              <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FAlfront&width=50&layout=button_count&action=like&size=small&show_faces=false&share=false&height=21&appId" 
                width="100" height="21" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true">
              </iframe>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!--Footer-->
    <nav class="navbar navbar-expand-sm navbar-dark elegant-color fixed-bottom">
      <ul class="navbar-nav" style="padding-right: 0px;">
        <li class="nav-item">
          <a class="nav-link">
            &#169; 2017 ALF Israel
          </a>
        </li>
      </ul>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a href="https://il.linkedin.com/in/andrey-galchevski-b40999a3" class="nav-link" target="_blank">
             By Andrey Galchevski
            <i class="fa fa-code" aria-hidden="true"></i>
          </a> 
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
  height: 75px;
  
}
.navbar {
  padding-top: 0px;
  padding-bottom: 0px;
  letter-spacing: 0.5px;
}
.social-links-mobile {
  padding-right: 40px;
}
.social-link-mobile {
  padding-top: 5px; 
  padding-left: 10px; 
  padding-right: 10px;
}
.social-link-desktop {
  padding-top: 5px; 
  padding-left: 10px; 
  padding-right: 10px;
}
.fb-share-btn {
  padding-top: 10px; 
  padding-left: 25px;
}
.my-icon {
  font-size: 30px;
}
.fixed-bottom {
  font-size: 11px;
}
.navbar .fixed-bottom .nav-item {
  padding-left: 0px;
  padding-right: 0px;
}
.fixed-bottom .nav-link{
  padding-top: 5px;
  padding-bottom: 5px;
}
@media (max-width: 992px){
  .navbar .fixed-bottom .nav-item .nav-link {
      padding-left: 0px;
      padding-right: 0px;
  }
}
</style>