<template lang="pug">
div.fb-page(
	data-href="https://www.facebook.com/totalliberationisrael" 
	data-width="500" 
	:data-height="screenHeight" 
	data-tabs="timeline" 
	data-small-header="true" 
	data-adapt-container-width="true" 
	data-hide-cover="false" 
	data-show-facepile="true"
)
	blockquote.fb-xfbml-parse-ignore(cite="https://www.facebook.com/totalliberationisrael")
		a(href="https://www.facebook.com/totalliberationisrael")
			loader(v-if="loading")
</template>

<script>
import Loader from './Loader'
export default {
	name: 'fb-page-preview',
	components: {
		Loader
	},
	created () {
		(function (d, s, id) {
			var js
			var fjs = d.getElementsByTagName(s)[0]
			if (d.getElementById(id)) return
			js = d.createElement(s); js.id = id
			js.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.12&appId=333838503789412&autoLogAppEvents=1'
			fjs.parentNode.insertBefore(js, fjs)
		}(document, 'script', 'facebook-jssdk'))
	},
	props: {
		loading: Boolean
	},
	computed: {
		screenHeight () {
			return window.innerHeight - 80 - 42 - 20
		}
	}
}
</script>