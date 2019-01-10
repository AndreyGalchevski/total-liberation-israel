<template lang="pug">
div
	div.navbar-fixed
		// Header navbar
		nav.grey.darken-4
			div.nav-wrapper
				router-link.brand-logo.right(to="/")
					img(src="https://res.cloudinary.com/dqvimfd8b/image/upload/v1520610299/alf-israel/logo/logo.png")
				a.sidenav-trigger.left(
					href="#" 
					data-target="sidenav"
				)
					i.material-icons.rtlx menu
				// Tabs
				ul.right.hide-on-med-and-down
					li
						div.separator
					li(:class="getNavItemClasses('Home')")
						router-link(to="/") ראשי
					li(:class="getNavItemClasses('About')")
						router-link(to="/About") מי אנחנו
					li(:class="getNavItemClasses('Events')")
						router-link(to="/events") אירועים קרובים
					li(:class="getNavItemClasses('Acticles')")
						router-link(to="/articles") כתבות
					li(:class="getNavItemClasses('Investigations')")
						router-link(to="/investigations") תחקירים
					li.dropdown-trigger(
						href="#" 
						data-target="navbar-dropdown-menu"
					) קירות שקופים
						// Navbar Dropdown menu
					ul.dropdown-content.grey.darken-4(id="navbar-dropdown-menu")
						li
							a(
								href="https://www.glass-walls.com/" 
								target="_blank"
							) עמוד רשמי
						li
							a(
								href="https://www.glass-walls.com/%D7%97%D7%A0%D7%95%D7%AA/" 
								target="_blank"
							) חנות
						li
							a(
								href="https://www.glass-walls.com/%D7%AA%D7%A8%D7%95%D7%9E%D7%94/" 
								target="_blank"
							) תרומה
					li(:class="getNavItemClasses('Contact')")
						router-link(to="/contact") צור קשר
					li(:class="getNavItemClasses('Login')")
						a(
							href="#" 
							v-if="isLoggedIn" 
							@click="logout"
						) יציאה
				// Social links For Desktop
				ul.left.hide-on-med-and-down
					li.social-link-desktop
						a(
							href="https://www.facebook.com/totalliberationisrael" 
							target="_blank"
						)
							i.fab.fa-facebook-square.my-icon.grey-text
					li.social-link-desktop
						a(
							href="https://www.instagram.com/total_liberation_israel" 
							target="_blank"
						)
							i.fab.fa-instagram.my-icon.grey-text
					li.social-link-desktop
						a(
							href="https://www.youtube.com/user/GlassWallsIsrael" 
							target="_blank"
						)
							i.fab.fa-youtube.my-icon.grey-text
					li.fb-share-btn-desktop
						iframe(
							src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Ftotalliberationisrael&width=50&layout=button_count&action=like&size=small&show_faces=false&share=false&height=21&appId"
							width="100" 
							height="21" 
							style="border:none;overflow:hidden" 
							scrolling="no" 
							frameborder="0" 
							allowTransparency="true"
						)
	// Social links For Mobile
	ul.sidenav.grey.darken-4(id="sidenav")
		li(:class="getNavItemClasses('Home')")
			router-link.sidenav-close(to="/") ראשי
		li(:class="getNavItemClasses('About')")
			router-link.sidenav-close(to="/About") מי אנחנו
		li(:class="getNavItemClasses('Events')")
			router-link.sidenav-close(to="/events") אירועים קרובים
		li(:class="getNavItemClasses('Acticles')")
			router-link.sidenav-close(to="/articles") כתבות
		li(:class="getNavItemClasses('Investigations')")
			router-link.sidenav-close(to="/investigations") תחקירים
		li.dropdown-trigger(
			href="#" 
			data-target="sidenav-dropdown-menu"
		) קירות שקופים
		// Sidenav Dropdown menu
		ul.dropdown-content.grey.darken-4(id="sidenav-dropdown-menu")
			li
				a(
					href="https://www.glass-walls.com/" 
					target="_blank"
				) עמוד רשמי
			li
				a(
					href="https://www.glass-walls.com/%D7%97%D7%A0%D7%95%D7%AA/" 
					target="_blank"
				) חנות
			li
				a(
					href="https://www.glass-walls.com/%D7%AA%D7%A8%D7%95%D7%9E%D7%94/" 
					target="_blank"
				) תרומה
		li(:class="getNavItemClasses('Contact')")
			router-link.sidenav-close(to="/contact") צור קשר
		li(:class="getNavItemClasses('Login')")
			a(
				href="#" 
				v-if="isLoggedIn" 
				@click="logout"
			) יציאה
		li
			div.social-links-mobile
				ul
					li
						a(
							href="hhttps://www.facebook.com/totalliberationisrael" 
							target="_blank"
						)
							div.center-align
								i.fab.fa-facebook-square.my-icon.grey-text
					li
						a(
							href="https://www.instagram.com/total_liberation_israel" 
							target="_blank"
						)
							div.center-align
								i.fab.fa-instagram.my-icon.grey-text
					li
						a(
							href="https://www.youtube.com/user/GlassWallsIsrael" 
							target="_blank"
						)
							div.center-align
								i.fab.fa-youtube.my-icon.grey-text
					li
						div.fb-share-btn-mobile
							iframe(
								src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Ftotalliberationisrael&width=50&layout=button_count&action=like&size=small&show_faces=false&share=false&height=21&appId"
								width="100" 
								height="21" 
								style="border:none;overflow:hidden" 
								scrolling="no" 
								frameborder="0" 
								allowTransparency="true"
							)

	// Footer navbar
	//- footer.page-footer
	//- 	div.container
	//- 		ul.copy-rights
	//- 			li.nav-item
	//- 				a.nav-link 2018 Total Liberation Israel
	//- 					i.fa.fa-copyright(aria-hidden="true")
	//- 		ul
	//- 			li
	//- 				a(
	//- 					href="https://il.linkedin.com/in/andrey-galchevski-b40999a3" 
	//- 					target="_blank"
	//- 				)
	//- 					img(src="https://res.cloudinary.com/dqvimfd8b/image/upload/c_scale,h_20/v1525702277/alf-israel/logo/logo-s.png")
					
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
			let classes = {
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
.active, nav ul a:hover {
	background-color: #424242;
}
.dropdown-content li a, .sidenav li a, .dropdown-trigger {
  color: #fafafa;
}
.brand-logo img {
	height: 3.8rem;
}
.separator {
	height: 1px;
	width: 100px;
}
.social-link-desktop {
	padding-left: 5px; 
	padding-right: 5px;
}
.fb-share-btn-desktop {
	padding-top: 7px;
	padding-left: 25px;
}
.fb-share-btn-mobile {
	padding-left: 25px;
}
.my-icon {
	font-size: 30px;
}
.social-links-mobile {
	position: absolute;
	right: 28%;
	bottom: 10%;
}

/* .fixed-bottom {
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
} */
/* .dropdown-menu a:hover {
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
} */
</style>