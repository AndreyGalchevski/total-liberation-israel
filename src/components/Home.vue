<template lang="pug">
  div(ref="swiperContainer" class="swiper-container")
    div(class="swiper-wrapper")
      div(class="swiper-slide image-1")
      div(class="swiper-slide image-2")
      div(class="swiper-slide image-3")
      div(class="swiper-slide image-4")
      div(class="swiper-slide image-5")
      div(class="swiper-slide image-6")
      div(class="swiper-slide image-7")
      div(class="swiper-slide image-8")
      div(class="swiper-slide image-9")
    div(ref="swiperButtonPrev" class="swiper-button-prev swiper-button-white")
    div(ref="swiperButtonNext" class="swiper-button-next swiper-button-white")    
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'home',
  data () {
    return {
      slider: null
    }
  },
  metaInfo () {
    let achmad = {
      meta: [
        {property: 'og:url', content: 'https://www.alf-israel.com/'},
        {property: 'og:type', content: 'website'},
        {property: 'og:title', content: 'חדשות החזית'},
        {property: 'og:description', content: 'האתר הרשמי של החזית לשחרור בעלי החיים ישראל'},
        {property: 'og:image', content: 'http://res.cloudinary.com/dqvimfd8b/image/upload/v1513593801/alf-israel/home/2.jpg'}
      ],
      title: 'חדשות החזית'
    }
    return achmad
  },
  mounted () {
    this.slider = new Swiper(this.$refs.swiperContainer, {
      loop: true,
      navigation: {
        nextEl: this.$refs.swiperButtonNext,
        prevEl: this.$refs.swiperButtonPrev
      },
      autoplay: {
        delay: 4000
      }
    })
  }
}
</script>

<style scoped>
html, body {
  position: relative;
  height: 100%;
}
body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color:#000;
  margin: 0;
  padding: 0;
}
.swiper-container {
  width: 100%;
  height: 100%;
  overflow-y: hidden;  
}
.swiper-slide {
  height: 100vh;
  min-height: 300px;
  background: no-repeat center center scroll;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.image-1 {
  background-image: url('https://res.cloudinary.com/dqvimfd8b/image/upload/v1519884087/alf-israel/home/1.jpg')
}
.image-2 {
  background-image: url('https://res.cloudinary.com/dqvimfd8b/image/upload/v1519884088/alf-israel/home/2.jpg')
}
.image-3 {
  background-image: url('https://res.cloudinary.com/dqvimfd8b/image/upload/v1519884088/alf-israel/home/3.jpg')
}
.image-4 {
  background-image: url('https://res.cloudinary.com/dqvimfd8b/image/upload/v1519884085/alf-israel/home/4.jpg')
}
.image-5 {
  background-image: url('https://res.cloudinary.com/dqvimfd8b/image/upload/v1519884088/alf-israel/home/5.jpg')
}
.image-6 {
  background-image: url('https://res.cloudinary.com/dqvimfd8b/image/upload/v1519884086/alf-israel/home/6.jpg')
}
.image-7 {
  background-image: url('https://res.cloudinary.com/dqvimfd8b/image/upload/v1519884087/alf-israel/home/7.jpg')
}
.image-8 {
  background-image: url('https://res.cloudinary.com/dqvimfd8b/image/upload/v1519884087/alf-israel/home/8.jpg')
}
.image-9 {
  background-image: url('https://res.cloudinary.com/dqvimfd8b/image/upload/v1519884088/alf-israel/home/9.jpg')
}
</style>