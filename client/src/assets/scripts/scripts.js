$( document ).ready(function() {
  $('.carousel').carousel({
    interval: 4000,
    cycle: true,
    pause: "null"
  })
  $('.navbar-nav>li>.hide-collapse').on('click', function(){
    $('.navbar-collapse').collapse('hide')
  })
})