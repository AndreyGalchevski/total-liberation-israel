<template lang="pug">
  div(id="myCarousel" class="carousel slide" data-ride="carousel")
    // Indicators
    ul(class="carousel-indicators")
      li(data-target="#myCarousel" data-slide-to="0" class="active")
      li(data-target="#myCarousel" data-slide-to="1")
      li(data-target="#myCarousel" data-slide-to="2")
      li(data-target="#myCarousel" data-slide-to="3")
      li(data-target="#myCarousel" data-slide-to="4")
      li(data-target="#myCarousel" data-slide-to="5")
      li(data-target="#myCarousel" data-slide-to="6")
      li(data-target="#myCarousel" data-slide-to="7")
      li(data-target="#myCarousel" data-slide-to="8")
    </ul>
    // Wrapper for slides
    div(class="carousel-inner" role="listbox")
      div(class="carousel-item active image-1")
      div(class="carousel-item image-2")
      div(class="carousel-item image-3")
      div(class="carousel-item image-4")
      div(class="carousel-item image-5")
      div(class="carousel-item image-6")
      div(class="carousel-item image-7")
      div(class="carousel-item image-8")
      div(class="carousel-item image-9")
    // Left and right controls
    a(class="carousel-control-prev" href="#myCarousel" data-slide="next")
      span(class="carousel-control-prev-icon")
    a(class="carousel-control-next" href="#myCarousel" data-slide="prev")
      span(class="carousel-control-next-icon")
</template>

<script>
export default {
  name: 'home',
  metaInfo: {
    title: 'חדשות החזית'
  }
}
</script>

<style scoped>
.carousel-item {
  height: 100vh;
  min-height: 300px;
  background: no-repeat center center scroll;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
/* Hide the carousel text when the screen is less than 600 pixels wide */
@media (max-width: 600px) {
.carousel-indicators {
    margin-right: 15px;
    }
}
.image-1 {
  background-image: url('https://res.cloudinary.com/dqvimfd8b/image/upload/v1513593795/alf-israel/home/1.jpg')
}
.image-2 {
  background-image: url('https://res.cloudinary.com/dqvimfd8b/image/upload/v1513593795/alf-israel/home/2.jpg')
}
.image-3 {
  background-image: url('https://res.cloudinary.com/dqvimfd8b/image/upload/v1513593795/alf-israel/home/3.jpg')
}
.image-4 {
  background-image: url('https://res.cloudinary.com/dqvimfd8b/image/upload/v1513593795/alf-israel/home/4.jpg')
}
.image-5 {
  background-image: url('https://res.cloudinary.com/dqvimfd8b/image/upload/v1513593795/alf-israel/home/5.jpg')
}
.image-6 {
  background-image: url('https://res.cloudinary.com/dqvimfd8b/image/upload/v1513593795/alf-israel/home/6.jpg')
}
.image-7 {
  background-image: url('https://res.cloudinary.com/dqvimfd8b/image/upload/v1513593795/alf-israel/home/7.jpg')
}
.image-8 {
  background-image: url('https://res.cloudinary.com/dqvimfd8b/image/upload/v1513593795/alf-israel/home/8.jpg')
}
.image-9 {
  background-image: url('https://res.cloudinary.com/dqvimfd8b/image/upload/v1513593795/alf-israel/home/9.jpg')
}
</style>