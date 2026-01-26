$(window).on('load', function () {
  $('#preloader').hide();
})

jQuery(document).ready(function ($) {
  function open_main_menu() {
    $('.mobile_side_menu').not('.main_menu').each(function () {
      $(this).removeClass('open');
    });
  }

  $('.side_toggle').click(function () {
    $('.mobile_side_menu.main_menu').addClass('open');
    $('body').css({ 'overflow': 'hidden' });
  })
  $('.d_close.main_menu_close').click(function () {
    $('.mobile_side_menu.main_menu').removeClass('open');
    $('body').css({ 'overflow': 'auto' });
  });


  //company menu toggle
  $('.company_menu_toggle').click(function () {
    $('.mobile_side_menu.company_menu').addClass('open');
  })
  $('.d_close.company_menu_close').click(function () {
    $('.mobile_side_menu.company_menu').removeClass('open');
  });

  //

  //service menu toggle
  $('.service_menu_toggle').click(function () {
    $('.mobile_side_menu.service_menu').addClass('open');
  })
  $('.d_close.service_menu_close').click(function () {
    $('.mobile_side_menu.service_menu').removeClass('open');
  });

  //

  //service main menu toggle

  $('.d_close.service_menu_close_main').click(function () {
    open_main_menu();
  });
  $('.d_close.technology_menu_close_main').click(function () {
    open_main_menu();
    //$('body').addClass('overflow-auto');
  });


  //

  //service inner develop menu toggle
  $('.service_develop_menu_toggle').click(function () {
    $('.mobile_side_menu.service_menu_develop').addClass('open');
  })
  $('.d_close.service_menu_close_a').click(function () {
    $('.mobile_side_menu.service_menu_develop').removeClass('open');
  });

  //

  //service inner develop other Service menu toggle
  $('.other_service_develop_menu').click(function () {
    $('.mobile_side_menu.service_menu_develop_other').addClass('open');
  })
  $('.d_close.service_menu_close_a_other').click(function () {
    $('.mobile_side_menu.service_menu_develop_other').removeClass('open');
  });

  //

  //service inner develop cms Service menu toggle
  $('.cms_service_develop_menu').click(function () {
    $('.mobile_side_menu.service_menu_develop_cms').addClass('open');
  })
  $('.d_close.service_menu_close_a_other').click(function () {
    $('.mobile_side_menu.service_menu_develop_cms').removeClass('open');
  });

  //

  //service inner develop database Service menu toggle
  $('.database_service_develop_menu').click(function () {
    $('.mobile_side_menu.service_menu_develop_database').addClass('open');
  })
  $('.d_close.service_menu_close_a_other').click(function () {
    $('.mobile_side_menu.service_menu_develop_database').removeClass('open');
  });

  //

  //service inner develop e_commerce Service menu toggle
  $('.e_commerce_service_develop_menu').click(function () {
    $('.mobile_side_menu.service_menu_develop_e_commerce').addClass('open');
  })
  $('.d_close.service_menu_close_a_other').click(function () {
    $('.mobile_side_menu.service_menu_develop_e_commerce').removeClass('open');
  });

  //

  //service inner develop mvc Service menu toggle
  $('.mvc_service_develop_menu').click(function () {
    $('.mobile_side_menu.service_menu_develop_mvc').addClass('open');
  })
  $('.d_close.service_menu_close_a_other').click(function () {
    $('.mobile_side_menu.service_menu_develop_mvc').removeClass('open');
  });

  //


  //service inner design menu toggle
  $('.service_design_menu_toggle').click(function () {
    $('.mobile_side_menu.service_menu_design').addClass('open');
  })
  $('.d_close.service_menu_close_a').click(function () {
    $('.mobile_side_menu.service_menu_design').removeClass('open');
  });

  //

  //service inner marketing menu toggle
  $('.service_marketing_menu_toggle').click(function () {
    $('.mobile_side_menu.service_menu_marketing').addClass('open');
  })
  $('.d_close.service_menu_close_a').click(function () {
    $('.mobile_side_menu.service_menu_marketing').removeClass('open');
  });

  //

  //service inner api menu toggle
  $('.service_api_menu_toggle').click(function () {
    $('.mobile_side_menu.service_menu_api').addClass('open');
  })
  $('.d_close.service_menu_close_a').click(function () {
    $('.mobile_side_menu.service_menu_api').removeClass('open');
  });

  //


  //service inner managed menu toggle
  $('.service_managed_menu_toggle').click(function () {
    $('.mobile_side_menu.service_menu_managed').addClass('open');
  })
  $('.d_close.service_menu_close_a').click(function () {
    $('.mobile_side_menu.service_menu_managed').removeClass('open');
  });

  //

  //service inner mobile menu toggle
  $('.service_mobile_menu_toggle').click(function () {
    $('.mobile_side_menu.service_menu_mobile').addClass('open');
  })
  $('.d_close.service_menu_close_a').click(function () {
    $('.mobile_side_menu.service_menu_mobile').removeClass('open');
  });

  //

  //service inner iot menu toggle
  $('.service_iot_menu_toggle').click(function () {
    $('.mobile_side_menu.service_menu_iot').addClass('open');
  })
  $('.d_close.service_menu_close_a').click(function () {
    $('.mobile_side_menu.service_menu_iot').removeClass('open');
  });

  //

  //technologie_menu  toggle
  $('.technologie_menu_toggle').click(function () {
    $('.mobile_side_menu.technologie_menu').addClass('open');
  })
  $('.d_close.technologie_menu_close').click(function () {
    $('.mobile_side_menu.technologie_menu').removeClass('open');
  });
  //

  ///technologie_menu  backend toggle
  $('.technologie_backend_menu_toggle').click(function () {
    $('.mobile_side_menu.technologie_menu_backend').addClass('open');
  })
  $('.d_close.technologie_menu_close_tech').click(function () {
    $('.mobile_side_menu.technologie_menu_backend').removeClass('open');
  });

  //

  ///technologie_menu  cms toggle
  $('.technologie_cms_menu_toggle').click(function () {
    $('.mobile_side_menu.technologie_menu_cms').addClass('open');
  })
  $('.d_close.technologie_menu_close_tech').click(function () {
    $('.mobile_side_menu.technologie_menu_cms').removeClass('open');
  });

  //

  //technologie_menu  frontend toggle
  $('.technologie_frontend_menu_toggle').click(function () {
    $('.mobile_side_menu.technologie_menu_frontend').addClass('open');
  })
  $('.d_close.technologie_menu_close_tech').click(function () {
    $('.mobile_side_menu.technologie_menu_frontend').removeClass('open');
  });

  //


  //technologie_menu  php toggle
  $('.technologie_php_menu_toggle').click(function () {
    $('.mobile_side_menu.technologie_menu_php').addClass('open');
  })
  $('.d_close.technologie_menu_close_tech').click(function () {
    $('.mobile_side_menu.technologie_menu_php').removeClass('open');
  });

  //


  //technologie_menu  other toggle
  $('.technologie_other_menu_toggle').click(function () {
    $('.mobile_side_menu.technologie_menu_other').addClass('open');
  })
  $('.d_close.technologie_menu_close_tech').click(function () {
    $('.mobile_side_menu.technologie_menu_other').removeClass('open');
  });

  //


  //industry menu toggle
  $('.industry_menu_toggle').click(function () {
    $('.mobile_side_menu.industry_menu').addClass('open');
  })
  $('.d_close.industry_menu_close').click(function () {
    $('.mobile_side_menu.industry_menu').removeClass('open');
  });
  //

  //package menu toggle
  $('.package_menu_toggle').click(function () {
    $('.mobile_side_menu.package_menu').addClass('open');
  })
  $('.d_close.package_menu_close').click(function () {
    $('.mobile_side_menu.package_menu').removeClass('open');
  });
  //

  jQuery('.tech_inner').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: false,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 1000,
    dots: false,
    arrows: false,

    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 430,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    }
    ]
  });
  //clients logo slider
  jQuery(".my_client_slider").slick({

    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]


  });

  jQuery(".f_case_study .SlickCarousel").slick({
    autoplay: false,
    autoplaySpeed: 5000, //  Slide Delay
    speed: 800, // Transition Speed
    slidesToShow: 5, // Number Of Carousel
    slidesToScroll: 1, // Slide To Move 
    pauseOnHover: false,
    arrows: true,
    prevArrow: '<span class="Slick-Prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>',
    nextArrow: '<span class="Slick-Next"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>',
    responsive: [
      {
        breakpoint: 1200, settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 992, settings: {
          slidesToShow: 3,
        }
      },


      {
        breakpoint: 768, settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 500, settings: {
          slidesToShow: 1,
        }
      }
    ],
  });

  $(".nav-link").click(function () {
    if (!$(this).hasClass('active show')) {
      $('#' + this.hash.substr(6).toLowerCase()).toggleClass('active show');
      $(".nav-link.active.show").removeClass("active show");

    }
  });

  if ($('.numeric_validate').length) {
    $('.numeric_validate').on('input', function () {
      var inp_val = $(this).val();
      var patt = /[^0-9]/g;
      $(this).val(inp_val.replace(patt, ""));

    })
  }


});

function myFunction(x) {
  var a = x.classList.toggle("change");
  if (a == true) {
    $("#mySidenav").css({ "width": "165px", });
  } else {
    $("#mySidenav").removeAttr("style");
  }
  if (a == true) {
    $("#icon").css({ "background": "#f2612c", });
  } else {
    $("#icon").removeAttr("style");
  }

}
// xs_toggle
function xsFunction(x) {
  var a = x.classList.toggle("change_xs");
  if (a == true) {
    $("#mySidenav_xs").css({ "width": "165px", });
  } else {
    $("#mySidenav_xs").removeAttr("style");
  }
  if (a == true) {
    $("#icon_xs").css({ "background": "#f2612c", });
  } else {
    $("#icon_xs").removeAttr("style");
  }

}
// end
// top-scroller



$(window).ready(function () {
  $(document.body).on('scroll', onScroll); // for mobile
  $(window).on('scroll', onScroll);
  function onScroll() {

    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
      $('#return-to-top').show(200);

    } else {
      $('#return-to-top').hide(200);

    }
  }

  $('#return-to-top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
  });
  //top-scroller-end
  //sticky-header

});
// main-js-end

$(document).ready(function () {


  $(document.body).on('scroll', onsticky); // for mobile
  $(window).on('scroll', onsticky);
  function onsticky() {
    if ($(this).scrollTop() > 1) {
      $('#main_header').addClass("sticky");
    } else {
      $('#main_header').removeClass("sticky");
    }
  }
  // sticky-header-end


  /*Sticky Tabs for packages*/
  /*$(window).scroll(function() {
      if ($(this).scrollTop() > 250){  
          $('.sticky_tab_dev').addClass("sticky_tab");
      }
      else{
          $('.sticky_tab_dev').removeClass("sticky_tab");
      }
  });*/


  /*Slider for packages*/

  $(document).ready(function () {
    function destroyAll() {
      $('.d_course_slider').each(function () {
        $(this).slick('unslick');
      })
    }
    function init_slick(sliderWrapper) {
      sliderWrapper.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 300,
        arrows: true,
        infinite: false,
        responsive: [{
          breakpoint: 1200,
          settings: {
            slidesToShow: 3

          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2

          }

        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2

          }

        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1

          }

        }
        ]
      });
    }
    init_slick($('.d_course_slider:first-of-type'));
    $('.d_popular_courses ul a').on('shown.bs.tab', function () {
      destroyAll();
      let opened_tab_id = $(this).attr('href');
      let active_slider = $(opened_tab_id).find('.d_course_slider');
      init_slick(active_slider);
    });
  }) /*Slider for packages End*/


  //initiatiing projects slider
  $('.projects_slider .slider_inner ').slick({
    slidesToShow: 3,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000
  })


  //initiating blog slider
  $('.serv_blog_sec .slider_box').slick({
    slidesToShow: 5,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: "<button class='d_pos_align d_pos_middle d_stick_left prev_btn slide_btn'><i class='fa fa-angle-left'></i></button>",
    nextArrow: "<button class='d_pos_align d_pos_middle d_stick_right next_btn slide_btn'><i class='fa fa-angle-right'></i></button>"
  })



})



$(document).ready(function () {
  var slided = false;
  $('.SlickCarousel').hover(function () {
    if (!slided) {
      $(".SlickCarousel .Slick-Next").click();
    }
    slided = true;
  })
  //message box 


  $('#wev_devtech_slider .tech_desc').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '#wev_devtech_slider .wev_devtech_slider',
    fade: true,
    arrows: false,

  })
  $('#wev_devtech_slider .wev_devtech_slider').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: '#wev_devtech_slider .tech_desc',
    focusOnSelect: true,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 3000,

    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }

    },
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    ]
  });





  //Shopify Optimization
  $('#shopify_optimization_port_sec .slider_inner ').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });



  //partner slider init
  $('#web_dev_partners .partners_slider .slider_inner ').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,

    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 483,
      settings: {
        slidesToShow: 1
      }
    }]
  })
  $('#web_dev_testimonial .top_slider .slider_inner').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: '#web_dev_testimonial .test_content_slider .slider_inner',
    focusOnSelect: true,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 3000,

    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 5,
        autoplay: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        autoplay: true
      }
    },
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 3,
        autoplay: true
      }
    }
    ]
  })


  $('#web_dev_testimonial .test_content_slider .slider_inner ').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '#web_dev_testimonial .top_slider .slider_inner',
    fade: true,
    arrows: false
  })

  //top_rated_devs

  $('#top_rated_devs .slider_inner').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,

    responsive: [{
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    }]
  });

  $('#web_dev_blog .slider_inner').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    }]
  });
  $('#web_dev_contact .directory_box .slider_inner').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    }]
  });

})



jQuery('.service_slide').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  speed: 300,
  autoplaySpeed: 3000,
  dots: false,
  arrows: false,

  responsive: [{
    breakpoint: 992,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: false
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: false
    }
  },
  {
    breakpoint: 576,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: false
    }
  },
  {
    breakpoint: 430,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: false
    }
  }
  ]
});


$('#industries_sec .slider_inner').slick({
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [{
    breakpoint: 992,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      dots: false
    }
  },
  {
    breakpoint: 576,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      arrows: false
    }
  }

  ]
});


/*web design hire slider*/
$('#top_rated_devs .slider_inne').slick({
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,

  responsive: [{
    breakpoint: 1199,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
    }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      dots: false
    }
  },
  {
    breakpoint: 576,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  }
  ]
});


$(document).ready(function () {
  //   $('.slick_pro').slick({
  //     dots:true, 
  //     arrows:false
  //   });

  //   $('.slick_pro').on('afterChange', function(event, slick, currentSlide){   
  //       $('.aside_img .img1').each(function(){
  //         $(this).removeClass('active_img'); 
  //       }) ; 


  //       $('.aside_img .img1[data-id=' + (currentSlide + 1) + ']').addClass('active_img'); 

  //   });


});


/*home page banner slider*/
$(document).ready(function () {
  let topstopScroll = true;
  let bottomstopScroll = true;

  const slider = $("#home_banner .banner_slider");
  let total_slides = slider.children('div').length - 1;

  slider
    .slick({
      //lazyLoad: 'progressive',           
      dots: true,
      infinite: false,
      speed: 1500,
      vertical: true,
      autoplay: false,
    })//.slickAnimation();
  //});

  //   function mouseWheel($slider) {
  //     $(window).on('wheel', { $slider: $slider }, mouseWheelHandler)
  //   }

  slider.on('wheel', (function (e) {



    if ((bottomstopScroll && (e.originalEvent.deltaY > 0)) || (topstopScroll && (e.originalEvent.deltaY < 0)))
      e.preventDefault();

    if (e.originalEvent.deltaY > 0) {
      $(this).slick('slickNext');
    } else {
      $(this).slick('slickPrev');
    }

  }));


  // On edge hit
  slider.on('afterChange', function (event, slick, currentSlide) {
    if (!currentSlide) {
      topstopScroll = false;
      bottomstopScroll = true;
    }


    if (total_slides == currentSlide) {
      bottomstopScroll = false;
      topstopScroll = true;
    }
  });


});






/*portfolio-slider page banner slider*/
$(document).ready(function () {
  let topstopScroll = true;
  let bottomstopScroll = true;

  const slider = $("#portfolio-slider .banner_slider");
  let total_slides = slider.children('div').length - 1;

  slider
    .slick({
      //lazyLoad: 'progressive',           
      dots: true,
      infinite: false,
      speed: 1500,
      vertical: true,
      autoplay: false,
    })//.slickAnimation();
  //});

  //   function mouseWheel($slider) {
  //     $(window).on('wheel', { $slider: $slider }, mouseWheelHandler)
  //   }

  slider.on('wheel', (function (e) {



    if ((bottomstopScroll && (e.originalEvent.deltaY > 0)) || (topstopScroll && (e.originalEvent.deltaY < 0)))
      e.preventDefault();

    if (e.originalEvent.deltaY > 0) {
      $(this).slick('slickNext');
    } else {
      $(this).slick('slickPrev');
    }

  }));


  // On edge hit
  slider.on('afterChange', function (event, slick, currentSlide) {
    if (!currentSlide) {
      topstopScroll = false;
      bottomstopScroll = true;
    }


    if (total_slides == currentSlide) {
      bottomstopScroll = false;
      topstopScroll = true;
    }
  });


});





(function ($) {
  "use strict";
  $(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body, #main_header').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
}(jQuery));



/*digital-marketing*/
$(document).ready(function () {
  $('.slick_pro').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $('.slick_pro').on('afterChange', function (event, slick, currentSlide) {
    $('.aside_img .img1').each(function () {
      $(this).removeClass('active_img');
    });


    $('.aside_img .img1[data-id=' + (currentSlide + 1) + ']').addClass('active_img');

  });


});




/* mobile app development particles*/
$(document).ready(function () {
  if ($('#particles-js-a').length) {
    particlesJS("particles-js-a",
      {
        "particles": {
          "number": {
            "value": 150,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#e1ebf4"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 15,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#e1ebf4",
            "opacity": 0.8,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true,
        "config_demo": {
          "hide_card": false,
          "background_color": "#b61924",
          "background_image": "",
          "background_position": "50% 50%",
          "background_repeat": "no-repeat",
          "background_size": "cover"
        }
      }

    );

  }
});


/*hire mobile developers */
function a_tab_social(evt, socialName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(socialName).style.display = "block";
  evt.currentTarget.className += "active";
}

// Get the element with id="defaultOpen" and click on it
//if(document.getElementById("defaultOpen")){
// document.getElementById("defaultOpen").click();
// }




/*hire mobile developers responsive */
$(document).ready(function () {

  if (screen.width < 1200) {


    $('.a_ios_social').slick({

      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
      ]
    });
  }

});
jQuery(document).ready(function ($) {
  $(window).on('load', function () {
    $('#cookieModal').modal('show');

    $('.modal-backdrop').remove();
    $('body').removeClass("modal-open");
  })
});


/*Why Choose youssefghamry for Shipping API Integration*/
$(document).ready(function () {
  $('.shipping_slider').slick({
    infinite: true,
    arrow: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});



/*Hire API Integration Developers*/
$(document).ready(function () {
  $('#hire_api .hire_sec_api').slick({
    infinite: true,
    arrow: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

/*Online Payment Gateway Integration Services, We offer*/
$(document).ready(function () {
  $('#online_pgi .slid_show').slick({
    infinite: true,
    arrow: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

/*DotNetNuke Development*/
$(document).ready(function () {
  $('#dotnet_ser_dev .slid_show').slick({
    infinite: false,
    arrow: false,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

/*Frequently Asked Questions*/
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}










$(document).ready(function () {






  /*Service Section Web Development Tabs*/
  function openCity(cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    console.log('child_id', cityName);
    document.getElementById(cityName).style.display = "block";
    $('#main_header .nav_side .service_pro .service_dev .dev_pro_ser ul li a[data-child="' + cityName + '"]').addClass("active");
  }

  $('#main_header .nav_side .service_pro .service_dev .dev_pro_ser ul li a').on('mouseover', function () {

    let eleId = $(this).attr('data-child');
    if (eleId != undefined) {
      openCity(eleId)
    }

  });


  /*Service Section Change*/
  $('.service_angle_dev').click(function () {
    $('.service_pro').addClass('open');
    $('body').addClass('open_over');
    openCity("web_dev_cms");
  })
  $('.d_close.main_menu_close').click(function () {
    $('.service_pro').removeClass('open');
    $('body').removeClass('open_over');

  });
})


/*dev footer select2 country*/
$(document).ready(function () {
  $('#d_coutry_list').select2();
  $('#city_select').select2();
  $('#quote_coutry').select2();

  //update on country change 
});


/*dev footer partical js*/
$(document).ready(function () {
  particlesJS('particles-js',
    {
      "particles": {
        "number": {
          "value": 150,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 5,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true,
      "config_demo": {
        "hide_card": false,
        "background_color": "#b61924",
        "background_image": "",
        "background_position": "50% 50%",
        "background_repeat": "no-repeat",
        "background_size": "cover"
      }
    }
  )
});



/*Current Year*/
function setCopyrightDate() {
  year = new Date().getYear();
  if (year < 1900)
    year += 1900;
  document.getElementById("currentYear").innerHTML = year;
}

if (document.getElementById("currentYear")) {
  setCopyrightDate();
}


$(document).ready(function () {
  //footer message


  var msg_mouseout = true, msg_close = true;
  function open_message(x) {
    $('.support_alert').remove();
    sessionStorage.setItem('show_pop', true);

    $('.d_message_box .toggle_box').slideDown();
    x.addClass('rotate_me');
    x.find('.fa-close').show();
    x.find('.fa-comments').hide();
    x.addClass('opened').removeClass('closed');
    msg_mouseout = false;
    msg_close = false;
  }

  $('.d_message_box .opener').on('mouseover', function () {
    if ($(window).width() > 768) {
      if (msg_mouseout == true && msg_close == true) {
        open_message($(this));
      }
    }
  })


  $('.d_message_box .opener').on('mouseleave', function () {
    if (msg_close) {
      msg_mouseout = true;
    }

  })
  $(document).on('click', '.d_message_box .closed', function () {

    open_message($(this));

  })
  $(document).on('click', '.d_message_box .opened', function () {
    $('.d_message_box .toggle_box').slideUp();
    $(this).removeClass('rotate_me')
      .find('.fa-close').hide();
    $(this).find('.fa-comments').show();
    $(this).removeClass('opened').addClass('closed');
    msg_close = true;
  })
  function update_captcha(CapInp) {
    grecaptcha.execute('6LeQn-gUAAAAAP2kSsdDZfXPSRr6JWntzC3nJ5HB', { action: 'homepage' }).then(function (token) {
      CapInp.val(token);
      CapInp.parents('form').submit();
    });

  }

  $('#Submit_get_in_touch').parents('form').submit(function (e) {
    if ($('#captcha_token').val() == '') {
      e.preventDefault();
      update_captcha($('#captcha_token'));
    }


  })


  $('#quote_submit').parents('form').submit(function (e) {
    if ($('#q_captcha_token').val() == '') {
      e.preventDefault();
      update_captcha($('#q_captcha_token'));
    }
  })



})


/*Portfolio Section*/
/*Portfolio*/
$(document).ready(function () {
  $('#port_web_block .portfolio_dev').slick({
    infinite: true,
    arrow: true,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});


function openfolio(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it

if (document.getElementById("defaultOpen_sec"))
  document.getElementById("defaultOpen_sec").click();


$(document).ready(function () {

  function setCookie() {
    var d = new Date();
    d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = "popupshow" + "=" + "shown" + ";" + expires + ";path=/";
    $(".alert-cookie-policy").hide();
  }

  function getCookie(cname) {




    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";


  }

  function checkCookie() {
    var user = getCookie("popupshow");
    if (user == "") {
      $(".alert-cookie-policy").show();
    }
  }

  $("#btnAcceptCookiePolicy").click(function () { setCookie() })

  checkCookie();



});


//paypal payment js 

$(document).ready(function () {



  function update_cities(countryEle, CityEle) {
    let current_coutry = countryEle.val();

    let reqUrl = SITE_BASE_URL + "update_data.php?update_country=" + current_coutry;

    let d_html = "";
    $.ajax({
      url: reqUrl, success: function (result) {
        let cities_data = JSON.parse(result);
        for (let key in cities_data) {

          let current_state_cities = cities_data[key];
          d_html += "<optgroup label='" + current_state_cities[0].state_name + "'>"
          for (let i = 0; i < current_state_cities.length; i++) {
            let city = current_state_cities[i];
            d_html += "<option value='" + city.city_id + "'>" + city.city_name + "</option>";

          }

          d_html += "</optgroup>";

        }
        CityEle.html(d_html);
      }
    });
  }
  $('#d_coutry_list').on('change', function () {
    let cities = update_cities($(this), $('#city_select'));
  })

  $('#pay_coutry_list').on('change', function () {
    let cities = update_cities($(this), $('#payp_city_list'));
  })


  //validation function 
  function exp_date_validate(InpElement) {
    var b = InpElement.val();
    InpElement.siblings('p.d_warn').remove();
    var dS = b.split("/");
    var d1 = new Date(dS[1], (+dS[0] - 1));
    var today = new Date();
    var current_year = today.getFullYear();
    var currentMonth = today.getMonth();
    var currentDate = new Date(current_year, currentMonth);
    console.log('current date is', currentDate);
    console.log('inserted date is ', d1);

    console.log('current time is ', d1.getTime());
    console.log('insert time is ', today.getTime());

    if (d1.getTime() < today.getTime()) {

      alert('Invalid date');
      $('<p class="d_warn text-danger" style=" margin-top: 8px; font-size: 13px; text-align:left">Invalid expiration.</p>').insertAfter(InpElement.parent('label'));
      //return false;
    } else {
      //return true
    }
    return false;
  }
  function empty_validate(x) {
    let validate = true;
    //validate 
    $(x).find('.empty_validate').each(function () {

      $(this).siblings('p.d_warn').remove();
      let val = $(this).val().trim();
      if (val == "") {

        if ($(this).attr('type') == "checkbox") {
          $(this).parent('label').next('p.d_warn').remove();

          if (!$(this).prop(':checked'))
            $('<p class="d_warn text-danger" style=" margin-top: 8px; font-size: 13px; text-align:left">This Field is Required.</p>').insertAfter($(this).parent('label'));



        } else {
          $('<p class="d_warn text-danger" style=" margin-top: 8px; font-size: 13px; text-align:left">This Field is Required.</p>').insertAfter($(this))
        }

        validate = false;
      }
    });
    return validate;
  }



  function email_validate(parent) {
    var validate = true;
    $(parent).find('.email_validate').each(function () {
      var x = $(this).val();

      var atpos = x.indexOf("@");
      var dotpos = x.lastIndexOf(".");
      if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
        if (x != "") {
          $('<p class="d_warn text-danger" style="text-align:left;  margin-top: 8px;font-size: 13px;">Invalid Email.</p>').insertAfter($(this))
        }
        validate = false;
      }

    })
    return validate;
  }



  function first_step_validate() {
    if (!empty_validate($('.paypal_first_step')) || !email_validate($('.paypal_first_step'))) {
      return false;
    } else {
      return true;
    }

  }



  function second_step_validation() {
    if (!empty_validate($('.paypal_card_info_box')) || !email_validate($('.paypal_card_info_box'))) {
      return false;
    } else {
      return true;
    }
  }



  $('#pay_coutry_list').select2();
  $('#payp_city_list').select2();

  //jQuery time
  var current_fs, next_fs, previous_fs; //fieldsets
  var left, opacity, scale; //fieldset properties which we will animate
  var animating; //flag to prevent quick multi-click glitches

  $(".paypay_multistep_form .next").click(function () {

    let stepInfo = $(this).data('step');

    if (stepInfo == 'personal_info') {
      if (!first_step_validate()) return false;
    }

    if (stepInfo == 'card') {
      if (!second_step_validation()) return false;

      $(this).parents('form').submit();
      return true;
    }

    if (animating) return false;
    animating = true;

    current_fs = $(this).parents('fieldset');
    next_fs = current_fs.next();

    //activate next step on progressbar using the index of next_fs
    //$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate({ opacity: 0 }, {
      step: function (now, mx) {
        //as the opacity of current_fs reduces to 0 - stored in "now"
        //1. scale current_fs down to 80%
        scale = 1 - (1 - now) * 0.2;
        //2. bring next_fs from the right(50%)
        left = (now * 50) + "%";
        //3. increase opacity of next_fs to 1 as it moves in
        opacity = 1 - now;
        current_fs.css({
          'transform': 'scale(' + scale + ')',
          'position': 'absolute'
        });
        next_fs.css({ 'left': left, 'opacity': opacity });
      },
      duration: 800,
      complete: function () {
        current_fs.hide();
        animating = false;
      },
      //this comes from the custom easing plugin
      easing: 'easeInOutBack'
    });
  });




  $(".paypay_multistep_form .previous").click(function () {
    if (animating) return false;
    animating = true;

    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();

    //de-activate current step on progressbar
    //$(".paypay_multistep_form #progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

    //show the previous fieldset
    previous_fs.show();
    //hide the current fieldset with style
    current_fs.animate({ opacity: 0 }, {
      step: function (now, mx) {
        //as the opacity of current_fs reduces to 0 - stored in "now"
        //1. scale previous_fs from 80% to 100%
        scale = 0.8 + (1 - now) * 0.2;
        //2. take current_fs to the right(50%) - from 0%
        left = ((1 - now) * 50) + "%";
        //3. increase opacity of previous_fs to 1 as it moves in
        opacity = 1 - now;
        current_fs.css({ 'left': left });
        previous_fs.css({ 'transform': 'scale(' + scale + ')', 'opacity': opacity });
      },
      duration: 800,
      complete: function () {
        current_fs.hide();
        animating = false;
        previous_fs.css({ 'position': 'relative' })
      },
      //this comes from the custom easing plugin
      easing: 'easeInOutBack'
    });
  });

  $(".paypay_multistep_form .submit").click(function () {
    return false;
  })


  $('#cardnumber').on('input', function () {
    let CardVal = $(this).val();
    $('[name="cardnumber"]').val(CardVal.replace(/ /g, ''));

  })



  $(function () {
    //if(visible($('.count-digit')))
    if ($('.count-digit').is(":visible")) {
      if ($('.count-digit').hasClass('counter-loaded')) return;
      $('.count-digit').addClass('counter-loaded');

      $('.count-digit').each(function () {
        var $this = $(this);
        jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
          duration: 3000,
          easing: 'swing',
          step: function () {
            $this.text(Math.ceil(this.Counter));
          }
        });
      });
    }
  })



  $.Tween.propHooks.number = {
    get: function (tween) {
      var num = tween.elem.innerHTML.replace(/^[^\d-]+/, "");
      return parseFloat(num) || 0;
    },

    set: function (tween) {
      var opts = tween.options;
      tween.elem.innerHTML =
        (opts.prefix || "") +
        tween.now.toFixed(opts.fixed || 0) +
        (opts.postfix || "");
    }
  };

  $("#num-1").animate(
    { number: 150 },
    {
      duration: 1000,
      postfix: "+"
    }
  );

  $("#num-2")
    .delay(500)
    .animate(
      { number: 35 },
      {
        duration: 2000,
        postfix: "+"
      }
    );

  $("#num-3")
    .delay(2000)
    .animate(
      { number: 2700 },
      {
        duration: 5000,
        postfix: "+"
      }
    );

  $("#num-4")
    .delay(4000)
    .animate(
      { number: 50 },
      {
        duration: 5000,
        postfix: "+"
      }
    );




})


$('.slick-slider-demo').slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  vertical: true,
  arrows: false
});

document.getElementById('whatsappForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // الوصول للحقول باستخدام خاصية name بدلاً من id
  const name = document.querySelector('input[name="q_fname"]').value;
  const email = document.querySelector('input[name="q_email"]').value;
  const phone = document.querySelector('input[name="q_phone"]').value;

  // الوصول للدولة
  const countryElement = document.querySelector('select[name="q_country"]');
  const country = countryElement.options[countryElement.selectedIndex].text;

  // الوصول للرسالة
  const message = document.querySelector('textarea[name="q_message"]').value;

  // رقم الواتساب الخاص بك
  const myNumber = "201503292942";

  // تنسيق الرسالة النهائية
  const fullText = `*New Quote Request (Amazon DynamoDB)*\n\n` +
    `*Full Name:* ${name}\n` +
    `*Email:* ${email}\n` +
    `*Phone:* ${phone}\n` +
    `*Country:* ${country}\n` +
    `*Message:* ${message}`;

  // تحويل النص لرابط
  const encodedText = encodeURIComponent(fullText);

  // فتح الواتساب
  window.open(`https://wa.me/${myNumber}?text=${encodedText}`, '_blank');
});
