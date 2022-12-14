
 $(document).ready(function () {

    /* Mobile menu */

  $(".menuIcon").click(function () {
    $(this).toggleClass("menu-close");

    $(".navigationBar").toggleClass("slideMenu");

    $("body").addClass("bodyFixed");
  });

  $(".sidebar-overlay, .closeMenu").click(function () {
    $(".menuIcon").removeClass("menu-close");

    $(".navigationBar").removeClass("slideMenu");

    $("body").removeClass("bodyFixed");
  });

  $(".menuMain li:has(ul)").prepend('<span class="arrow"></span>');

  $(".arrow").click(function () {
    $(this).siblings("ul").slideToggle("slow");

    $(this).toggleClass("minus");
  });

  /*~~~~~~~ 02. Window Scroll  ~~~~~~~~*/

  $(".scrollTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);

    return false;
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
      $(".scrollTop").fadeIn();

      $(".headerMain").addClass("has_sticky");
      $("body").addClass("sticky_header");
    } else {
      $(".scrollTop").fadeOut();

      $(".headerMain").removeClass("has_sticky");
      $("body").removeClass("sticky_header");
    }
  });

    $('a[href^="#"]').on("click", function(event) {
        var target = $(this.getAttribute("href"));
        if (target.length) {
            event.preventDefault();
            $("html, body").stop().animate({
                scrollTop: target.offset().top,
            }, 1000)
        }
    })



$('.banproductslide').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  appendArrows: '.banproductArrows',
  arrows: true,
  autoplay: true,
  autoplaySpeed: 2500,
  speed: 500,
  fade: true,
  responsive: [
    {

      breakpoint: 991, 
      settings: {
        slidesToShow: 1,
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
        dots: false,
        arrows: true,
      }
    }
  ]
});

$('.whatwedoSlide').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  appendArrows: '.whatwedoArrows',
  arrows: true,
  autoplay: true,
  autoplaySpeed: 2500,
  speed: 500,
  responsive: [
    {

      breakpoint: 991, 
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,

      }
    },

    {

      breakpoint: 768, 
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: true,
      }
    },

    {

      breakpoint: 415, 
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: true,
      }
    }
  ]
});

$('.productBoxMain').slick({
  slidesToShow: 2,
  slidesToScroll: 2,
  autoplay: false,
  dots:false,

  responsive: [
    {

      breakpoint: 568, 
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        dots:true,
        autoplay:true,
      }
    },
  ]
});


  /* Mobile filter  & shorting */

  $('.mob_filter').click(function () {
    $('.filtersidebar').addClass('openFilter');
    $('body').addClass('bodyFixed');
  });


  $('.sidebarTitle').click(function () {
    if ($('.filtersidebar').hasClass('openFilter')) {
      $('.filtersidebar').removeClass('openFilter');
      $('body').removeClass('bodyFixed');
    }
  });



 // $(document).on("click", ".qtyplus", function(e) {
 //        e.preventDefault();
 //        var s = parseInt($("#quantityField").val());
 //        isNaN(s) ? $("#quantityField").val(1) : $("#quantityField").val(s + 1)
 //    }); 
 // $(document).on("click", ".qtyminus", function(e) {
 //        e.preventDefault();
 //        var s = parseInt($("#quantityField").val());
 //        !isNaN(s) && s > 1 ? $("#quantityField").val(s - 1) : $("#quantityField").val(1)
 //    });

var buttonPlus  = $(".qtyplus");
var buttonMinus = $(".qtyminus");

var incrementPlus = buttonPlus.click(function() {
var $n = $(this)
  .parent(".quantityBox")
  .find(".qv-quantity");
  $n.val(Number($n.val())+1 );
});

var incrementMinus = buttonMinus.click(function() {
var $n = $(this)
  .parent(".quantityBox")
  .find(".qv-quantity");
  var amount = Number($n.val());
  if (amount > 0) {
    $n.val(amount-1);
  }
});


var sidebar = new StickySidebar('#sidebar', {
  containerSelector: '#main-content',
  innerWrapperSelector: '.sidebar__inner',
  topSpacing: 100,
  bottomSpacing: 20
});





  /* ------| A. Svg Rendering In Browser |--------- */

  function svgConvert(svgClass) {
    $(svgClass).each(function () {
      var $img = $(this);

      var imgID = $img.attr("id");

      var imgClass = $img.attr("class");

      var imgURL = $img.attr("src");

      $.get(
        imgURL,
        function (data) {
          /* Get the SVG tag, ignore the rest */

          var $svg = $(data).find("svg");

          /* Add replaced image's ID to the new SVG */

          if (typeof imgID !== "undefined") {
            $svg = $svg.attr("id", imgID);
          }

          /* Add replaced image's classes to the new SVG */

          if (typeof imgClass !== "undefined") {
            $svg = $svg.attr("class", imgClass + " svgIcon");
          }

          $svg = $svg.attr("fill", "currentColor");

          /* Remove any invalid XML tags as per http://validator.w3.org */

          $svg = $svg.removeAttr("xmlns:a");

          /* Replace image with new SVG*/

          $img.replaceWith($svg);
        },
        "xml"
      );
    });
  }

 });