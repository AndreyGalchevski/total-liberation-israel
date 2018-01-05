$( document ).ready(function() {
  $('.carousel').carousel({
    interval: 4000,
    cycle: true,
    pause: "null"
  })
  $("li.nav-item").on("click", function(){
    $(".navbar-nav").find(".active").removeClass("active");
    $(this).addClass("active");
  });
});