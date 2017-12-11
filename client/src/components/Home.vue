<template>
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ul class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
      <li data-target="#myCarousel" data-slide-to="3"></li>
      <li data-target="#myCarousel" data-slide-to="4"></li>
      <li data-target="#myCarousel" data-slide-to="5"></li>
      <li data-target="#myCarousel" data-slide-to="6"></li>
      <li data-target="#myCarousel" data-slide-to="7"></li>
      <li data-target="#myCarousel" data-slide-to="8"></li>
    </ul>
    <!-- Wrapper for slides -->
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../assets/home/1.jpg" alt='Animal rights activist petting a group of sheep on a sheep farm' >
      </div>
      <div class="carousel-item" v-for="pic in pics">
        <img :src="pic.url" :alt="pic.alt">
      </div>
    </div>
    <!-- Left and right controls -->
    <a class="carousel-control-prev" href="#myCarousel" data-slide="next">
      <span class="carousel-control-prev-icon"></span>
    </a>
    <a class="carousel-control-next" href="#myCarousel" data-slide="prev">
      <span class="carousel-control-next-icon"></span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      pics: [
        {
          url: require('../assets/home/2.jpg'),
          alt: 'Animal rights activist waving an ALF flag in front of a slaughterhouse gates'
        },
        {
          url: require('../assets/home/3.jpg'),
          alt: 'Animal rights activist in tears protesting animal abuse by chaining herself to a a fence'
        },
        {
          url: require('../assets/home/4.jpg'),
          alt: 'Animal rights activist giving water to turkeys being moved to a slaughterhouse on a truck'
        },
        {
          url: require('../assets/home/5.jpg'),
          alt: 'Animal rights activist holding a sign againt the dairy industry'
        },
        {
          url: require('../assets/home/6.jpg'),
          alt: 'Animal rights activist blocking an entrance to the slaughterhouse'
        },
        {
          url: require('../assets/home/7.jpg'),
          alt: 'Animal rights activist and a child petting a tiny chick'
        },
        {
          url: require('../assets/home/8.jpg'),
          alt: 'Animal rights activist holding a sign againt the dairy industry'
        },
        {
          url: require('../assets/home/9.jpg'),
          alt: 'Animal rights activist holding a sign with the quote of Bernard Shaw'
        }
      ]
    }
  },
  metaInfo: {
    title: 'חדשות החזית'
  }
}
</script>

<style scoped>
 
.carousel-inner img {
    width: 100%; /* Set width to 100% */
    margin: auto;
    min-height:100px;
}

/* Hide the carousel text when the screen is less than 600 pixels wide */
@media (max-width: 600px) {
.carousel-caption {
    display: none; 
    }
}
</style>