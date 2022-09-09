
// preloper js start
$('.js-preloader').preloadinator({
  minTime: 2000
});
// preloper js end

// menu js start
$(Window).scroll(function(){
    var scrolling = $(this).scrollTop()
    if(scrolling> 80){
      $(".bg-menu").addClass("nav-color")
    }else{
      $(".bg-menu").removeClass("nav-color")
    }
  })

// menu js end

// scroll js start
$(".scroll-icon i").click(function(){
  $("html,body").animate({
    scrollTop: 0,
  },1000)
})

$(window).scroll(function(){
  var scrolling = $(this).scrollTop()
  if(scrolling>50){
    $(".scroll-icon i").fadeIn(500)
  }
  else{
    (scrolling>40)
      $(".scroll-icon i").fadeOut(500)
    }
})

// scroll js end