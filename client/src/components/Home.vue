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
      div(class="carousel-item active" style="background-image: url('http://res.cloudinary.com/dqvimfd8b/image/upload/v1513593795/alf-israel/home/1.jpg')")
      div(class="carousel-item" style="background-image: url('http://res.cloudinary.com/dqvimfd8b/image/upload/v1513593795/alf-israel/home/2.jpg')")
      div(class="carousel-item" style="background-image: url('http://res.cloudinary.com/dqvimfd8b/image/upload/v1513593795/alf-israel/home/3.jpg')")
      div(class="carousel-item" style="background-image: url('http://res.cloudinary.com/dqvimfd8b/image/upload/v1513593795/alf-israel/home/4.jpg')")
      div(class="carousel-item" style="background-image: url('http://res.cloudinary.com/dqvimfd8b/image/upload/v1513593795/alf-israel/home/5.jpg')")
      div(class="carousel-item" style="background-image: url('http://res.cloudinary.com/dqvimfd8b/image/upload/v1513593795/alf-israel/home/6.jpg')")
      div(class="carousel-item" style="background-image: url('http://res.cloudinary.com/dqvimfd8b/image/upload/v1513593795/alf-israel/home/7.jpg')")
      div(class="carousel-item" style="background-image: url('http://res.cloudinary.com/dqvimfd8b/image/upload/v1513593795/alf-israel/home/8.jpg')")
      div(class="carousel-item" style="background-image: url('http://res.cloudinary.com/dqvimfd8b/image/upload/v1513593795/alf-israel/home/9.jpg')")
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
.carousel-caption {
    display: none; 
    }
}
</style>