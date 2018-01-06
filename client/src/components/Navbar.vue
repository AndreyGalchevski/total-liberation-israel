<template lang="pug">
  div(class="container")
    // Header
    nav(class="navbar navbar-expand-xl navbar-dark elegant-color fixed-top scrolling-navbar")
      router-link(class="navbar-brand" to="/")
        img(src="http://res.cloudinary.com/dqvimfd8b/image/upload/v1514480811/alf-israel/logo/logo2.png")
      button(type="button" class="navbar-toggler" data-toggle="collapse" data-target="#myNavbar")
        span(class="navbar-toggler-icon")                        
      div(class="collapse navbar-collapse" id="myNavbar")
        ul(class="navbar-nav")
          // Tabs
          li(:class="getNavItemClasses('Home')")
            router-link(class="nav-link grey-text" to="/") ראשי
          li(:class="getNavItemClasses('About')")
            router-link(class="nav-link grey-text" to="/About") מי אנחנו
          li(:class="getNavItemClasses('Events')")
            router-link(class="nav-link grey-text" to="/events") אירועים קרובים
          li(:class="getNavItemClasses('Acticles')")
            router-link(class="nav-link grey-text" to="/articles") מאמרים
          li(:class="getNavItemClasses('Investigations')")
            router-link(class="nav-link grey-text" to="/investigations") תחקירים
          li(class="nav-item")
            a(class="nav-link grey-text" href="https://www.glass-walls.com/" target="_blank") קירות שקופים
          li(class="nav-item")
            a(class="nav-link grey-text" href="https://www.glass-walls.com/%D7%97%D7%A0%D7%95%D7%AA/" target="_blank") חנות
          li(class="nav-item")
            a(class="nav-link grey-text" href="https://www.glass-walls.com/%D7%AA%D7%A8%D7%95%D7%9E%D7%94/" target="_blank") תרומה
          li(:class="getNavItemClasses('Contact')")
            router-link(class="nav-link grey-text" to="/contact") צור קשר
          li(:class="getNavItemClasses('Login')")
            router-link(class="nav-link grey-text" to="/login" v-if="!isLoggedIn") התחברות
          li(:class="getNavItemClasses('Login')")
            a(href="#" class="nav-link grey-text" v-if="isLoggedIn" @click="logout") יציאה
        // Social links For Mobile
        div(class="social-links-mobile d-sm-none")
          a(href="https://www.facebook.com/Alfront" class="social-link-mobile" target="_blank")
              i(class="fa fa-facebook my-icon grey-text")
          a(href="https://www.instagram.com/alf_israel" class="social-link-mobile" target="_blank")
              i(class="fa fa fa-instagram my-icon grey-text")
          a(href="https://www.youtube.com/user/GlassWallsIsrael" class="social-link-mobile" target="_blank")
              i(class="fa fa-youtube-square my-icon grey-text")
          div(class="fb-share-btn-mobile")
            iframe(src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FAlfront&width=50&layout=button_count&action=like&size=small&show_faces=false&share=false&height=21&appId"
                width="100" height="21" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true")
        // Social links For Desktop
        div(class="d-none d-md-block mr-auto")
          ul(class="navbar-nav")
            li(class="nav-item social-link-desktop")
              a(href="https://www.facebook.com/Alfront" target="_blank")
                i(class="fa fa-facebook my-icon grey-text")
            li(class="nav-item social-link-desktop")
              a(href="https://www.instagram.com/alf_israel" target="_blank")
                i(class="fa fa fa-instagram my-icon grey-text")
            li(class="nav-item social-link-desktop")
              a(href="https://www.youtube.com/user/GlassWallsIsrael" target="_blank")
                i(class="fa fa-youtube-square my-icon grey-text")
            li(class="nav-item fb-share-btn-desktop")
              iframe(src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FAlfront&width=50&layout=button_count&action=like&size=small&show_faces=false&share=false&height=21&appId"
                width="100" height="21" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true")
    // Footer
    nav(class="navbar navbar-expand-sm navbar-dark elegant-color fixed-bottom")
      ul(class="navbar-nav copy-rights")
        li(class="nav-item")
          a(class="nav-link") 2018 ALF Israel &#169;
      ul(class="navbar-nav mr-auto")
        li(class="nav-item")
          a(href="https://il.linkedin.com/in/andrey-galchevski-b40999a3" class="nav-link" target="_blank") By Andrey Galchevski
            i(class="fa fa-code" aria-hidden="true")
</template>

<script>
export default {
  name: 'navbar',
  methods: {
    logout () {
      this.$router.push({name: 'Home'})
      this.$store.dispatch('logout')
    },
    getNavItemClasses (routeName) {
      var classes = {
        'nav-item': true,
        'active': false
      }

      if (this.$route.name === routeName) {
        classes.active = true
      }

      return classes
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
  padding-top: 10px;
  padding-right: 40px;
  padding-bottom: 20px;
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
.fb-share-btn-desktop {
  padding-top: 10px; 
  padding-left: 25px;
}
.fb-share-btn-mobile {
  padding-top: 20px; 
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
.copy-rights {
  padding-right: 0px;
}
@media (max-width: 992px){
  .navbar .fixed-bottom .nav-item .nav-link {
      padding-left: 0px;
      padding-right: 0px;
  }
}
</style>