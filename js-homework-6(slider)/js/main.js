$(function () { 

  $('.promo-slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 300,
  })
  


  const slider = $('.my-slider').lightSlider({
    controls: false,
    item: 5,
    slideMargin: 20,
    loop: true,
    autoWidth: false,
    pager: false,
     responsive : [
            {
                breakpoint:1200,
                settings: {
                    item:4,
                    slideMove:1,
                    
                    
                  }
            },
            {
                breakpoint:950,
                settings: {
                    item:3,
                    slideMove:1,
                    
                  }
            },
            {
                breakpoint:600,
                settings: {
                    item:2,
                    slideMove:1,
                  controls: false,
                    pager: true
                    
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:1,
                  slideMove: 1,
                  controls: false,
                    pager: true
                    
                  }
            }
        ]

  });
  const slider1 = $('.my-slider-2').lightSlider({
    controls: false,
    item: 9,
    slideMargin: 20,
    pager: false,
    loop: true,
    autoWidth: false,
      responsive : [
            {
                breakpoint:1400,
                settings: {
                    item:6,
                    slideMove:1,
                    
                  }
            },
            {
                breakpoint:800,
                settings: {
                    item:6,
                  slideMove: 1,
                    pager: false
                    
                  }
            },
            {
                breakpoint:500,
                settings: {
                    item:4,
                  slideMove: 1,
                  controls: false,
                    pager: true
                    
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:2,
                  slideMove: 1,
                    controls: false,
                    pager: true
                  }
            }
        ]
  });


  $("#slide-prev").on('click', function () {
    slider.goToPrevSlide()
  })
  $("#slide-next").on('click', function () {
    slider.goToNextSlide()
  })
  $("#slide-prev-1").on('click', function () {
    slider1.goToPrevSlide()
  })
  $("#slide-next-1").on('click', function () {
    slider1.goToNextSlide()
  })


})

function toggleMenu(){
    document.getElementById("mobile-menu").classList.toggle("open")
    document.getElementById("hamb-btn").classList.toggle("is-active")
    document.getElementById("shadow").classList.toggle("show")
}