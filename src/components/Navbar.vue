<template lang="pug">
  div(class="container")
    // Header navbar
    nav(class="navbar navbar-expand-xl navbar-dark elegant-color fixed-top scrolling-navbar")
      router-link(class="navbar-brand" to="/")
        img(src="https://res.cloudinary.com/dqvimfd8b/image/upload/v1520610299/alf-israel/logo/logo.png")
      button(type="button" class="navbar-toggler" data-toggle="collapse" data-target="#myNavbar")
        span(class="navbar-toggler-icon")

      // Tabs
      div(class="collapse navbar-collapse" id="myNavbar")
        ul(class="navbar-nav")
          li(:class="getNavItemClasses('Home')")
            router-link(class="nav-link grey-text hide-collapse" to="/") ראשי
          li(:class="getNavItemClasses('About')")
            router-link(class="nav-link grey-text hide-collapse" to="/About") מי אנחנו
          li(:class="getNavItemClasses('Events')")
            router-link(class="nav-link grey-text hide-collapse" to="/events") אירועים קרובים
          li(:class="getNavItemClasses('Acticles')")
            router-link(class="nav-link grey-text hide-collapse" to="/articles") כתבות
          li(:class="getNavItemClasses('Investigations')")
            router-link(class="nav-link grey-text hide-collapse" to="/investigations") תחקירים
          li(class="nav-item dropdown")
            a(class="nav-link grey-text dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown") קירות שקופים
            div(class="dropdown-menu")
              a(class="dropdown-item grey-text hide-collapse" href="https://www.glass-walls.com/" target="_blank") עמוד רשמי
              a(class="dropdown-item grey-text hide-collapse" href="https://www.glass-walls.com/%D7%97%D7%A0%D7%95%D7%AA/" target="_blank") חנות
              a(class="dropdown-item grey-text hide-collapse" href="https://www.glass-walls.com/%D7%AA%D7%A8%D7%95%D7%9E%D7%94/" target="_blank") תרומה
          li(:class="getNavItemClasses('Contact')")
            router-link(class="nav-link grey-text hide-collapse" to="/contact") צור קשר
          li(:class="getNavItemClasses('Login')")
            a(href="#" class="nav-link cyan-text hide-collapse" v-if="isLoggedIn" @click="logout") יציאה

        // Social links For Mobile
        div(class="social-links-mobile d-sm-none")
          a(href="hhttps://www.facebook.com/totalliberationisrael" class="social-link-mobile" target="_blank")
              i(class="fa fa-facebook my-icon grey-text")
          a(href="https://www.instagram.com/total_liberation_israel" class="social-link-mobile" target="_blank")
              i(class="fa fa fa-instagram my-icon grey-text")
          a(href="https://www.youtube.com/user/GlassWallsIsrael" class="social-link-mobile" target="_blank")
              i(class="fa fa-youtube-square my-icon grey-text")
          div(class="fb-share-btn-mobile")
            iframe(src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Ftotalliberationisrael&width=50&layout=button_count&action=like&size=small&show_faces=false&share=false&height=21&appId"
                width="100" height="21" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true")

        // Social links For Desktop
        div(class="d-none d-md-block mr-auto")
          ul(class="navbar-nav")
            li(class="nav-item social-link-desktop")
              a(href="https://www.facebook.com/totalliberationisrael" target="_blank")
                i(class="fa fa-facebook my-icon grey-text")
            li(class="nav-item social-link-desktop")
              a(href="https://www.instagram.com/total_liberation_israel" target="_blank")
                i(class="fa fa fa-instagram my-icon grey-text")
            li(class="nav-item social-link-desktop")
              a(href="https://www.youtube.com/user/GlassWallsIsrael" target="_blank")
                i(class="fa fa-youtube-square my-icon grey-text")
            li(class="nav-item fb-share-btn-desktop")
              iframe(src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Ftotalliberationisrael&width=50&layout=button_count&action=like&size=small&show_faces=false&share=false&height=21&appId"
                width="100" height="21" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true")

    // Footer navbar
    nav(class="navbar navbar-expand-sm navbar-dark elegant-color fixed-bottom")
      ul(class="navbar-nav copy-rights")
        li(class="nav-item")
          a(class="nav-link") 2018 Total Liberation Israel
            i(class="fa fa-copyright" aria-hidden="true")
      ul(class="navbar-nav mr-auto")
        li(class="nav-item")
          a(href="https://il.linkedin.com/in/andrey-galchevski-b40999a3" class="nav-link" target="_blank")
            img(src="https://res.cloudinary.com/dqvimfd8b/image/upload/c_scale,h_32/v1520506544/alf-israel/logo/andarraylogo.png")
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
  height: 50px;
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
.fixed-bottom .nav-link .fa {
  padding-left: 0px;
}
.dropdown-menu a:hover {
    color: #757575 !important;
    cursor: pointer;
}
@media (max-width: 992px){
  .navbar .nav-item .nav-link {
      padding-left: 0px;
      padding-right: 0px;
  }
  .dropdown-item {
    display: inline;
  }
}
.dropdown-menu {
  text-align: center;
  min-width: 100%;
}
</style>