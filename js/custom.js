$(document).ready(function () {

$('#slider').owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    autoplayHoverPause: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:false,
        }
    }
})

$('#blog-slider').owlCarousel({
  loop: true,
  margin: 40,
  nav: true,
  navText: [
    "<i class='fa fa-angle-left'></i>",
    "<i class='fa fa-angle-right'></i>"
  ],
  autoplay: false,
  responsive: {
    0: {
      items: 1,
      nav:true,
    },
    600: {
      items: 3,
      nav:true,
    },
    1000: {
      items: 4,
      nav:true,
    }
  }
})

});

