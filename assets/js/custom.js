"use strict"

$(document).ready(function(){
      $('#snapshots').owlCarousel({
        autoplay: true,
        dots: false,
        loop: true,
        // animateOut: 'fadeOut',
        autoplayTimeout:4000,
        margin: 0,
        responsiveClass: true,
        autoplayHoverPause:true,
        responsive: {
          0: {
            items: 1,
            nav: true
          },
          600: {
            items: 1,
            nav: true
          },
          1000: {
            items: 1,
            nav: true,
            margin: 20
          }
        }
      })

      $('#testimonials').owlCarousel({
        loop: true,
        margin: 10,
        dots: true,
        autoplay: true,
        responsiveClass: true,
        autoplayHoverPause:true,
        responsive: {
          0: {
            items: 1,
            nav: false
          },
          600: {
            items: 1,
            nav: false
          },
          1000: {
            items: 1,
            nav: false,
            margin: 20
          }
        }
      })

      $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y > 200) {
          $('.sticky').fadeIn('fast');
        } else {
          $('.sticky').fadeOut('slow');
        }
      });
})
