$(document).ready(function () {
  let scrollbarNav = Math.floor($(".nav-links .scrollbar ul").height());
  let overflow = Math.floor($(".nav-links .scrollbar .overflow").height());

  $(".nav-links .scrollbar").scroll(function () {
    let scrollbarMove = Math.floor($(".nav-links .scrollbar").scrollTop());

    if (scrollbarMove >= scrollbarNav - overflow + 15) {
      $(".popUp-scroll-nav").css({ display: "flex" });
    }
  });
  $(".popUp-scroll-nav").mouseup(function (e) {
    var container9 = $(".box-popup-scroll-nav");
    if (!container9.is(e.target) && container9.has(e.target).length === 0) {
      $(".popUp-scroll-nav").hide();
    }
  });
  $(".popUp-scroll-cards").mouseup(function (e) {
    var container9 = $(".box-popup-scroll-cards");
    if (!container9.is(e.target) && container9.has(e.target).length === 0) {
      $(".popUp-scroll-cards").hide();
    }
  });
  let scrollbarCard = Math.floor(
    $(".card-section .scrollbar2 .container").height()
  );
  let overflowCard = Math.floor(
    $(".card-section .scrollbar2 .overflow").height()
  );

  $(".card-section .scrollbar2").scroll(function () {
    let scrollbarMoveCard = Math.floor(
      $(".card-section .scrollbar2").scrollTop()
    );

    if (scrollbarMoveCard >= scrollbarCard - overflowCard) {
      $(".popUp-scroll-cards").css({ display: "flex" });
    }
  });

  $(".alarm").click(function () {
    $(".notification").show();
  });

  $(".item-food").click(function () {
    let catgry = $(this).attr("catgry");

    if ($(this).hasClass("active-item")) {
      $(this).removeClass("active-item");
    } else {
      $(this).addClass("active-item");
    }
  });

  $(".item-notification").click(function () {
    $(".notification").hide();
    $(".offers-item").css({ display: "flex" });
  });
  $(".offers-item").mouseup(function (e) {
    var container9 = $(".box-offers");
    if (!container9.is(e.target) && container9.has(e.target).length === 0) {
      $(".offers-item").hide();
    }
  });
  $(".close-mop").click(function () {
    $(".nav-social").hide();
  });
  $(".close-restaurant-details").click(function () {
    $(".popup-details").hide();
  });
  $(".close-notification").click(function () {
    $(".notification").hide();
  });
  $("#loading-page").fadeOut(1000, function () {
    $("body").css({ overflow: "auto" });
    $(".offers-item").css({ display: "flex" });
  });
  $(".phone-now").click(function () {
    $(".popup-details").css({ display: "flex" });
  });
  $(".btn-contact").click(function () {
    $(".popup-details").css({ display: "flex" });
  });

  $(".popup-details").mouseup(function (e) {
    var container6 = $(".restranut-details");
    if (!container6.is(e.target) && container6.has(e.target).length === 0) {
      $(".popup-details").hide();
    }
  });
  $(".notification").mouseup(function (e) {
    var container5 = $(".box-notification");
    if (!container5.is(e.target) && container5.has(e.target).length === 0) {
      $(".notification").hide();
    }
  });

  $(".nav-social").mouseup(function (e) {
    var container6 = $(".mop-nav");
    if (!container6.is(e.target) && container6.has(e.target).length === 0) {
      $(".nav-social").hide();
    }
  });
  $("#bar").click(function () {
    $(".nav-social").show();
  });

  $("#searchInput").keypress(function () {
    $(".icon-search").hide();
  });
  $("#searchInput").blur(function () {
    let values = $(this).val();
    if (values == "") {
      $(".icon-search").show();
    }
  });





  $('.item-food input[type="checkbox"]').click(function () {
    if ($(this).prop("checked") == true) {
      $(this).addClass("active-item");
    } else if ($(this).prop("checked") == false) {
      $(this).removeClass("active-item");
    }
  });

  $(".select-restranut").on("change", function () {
    $(".numbers-restranut").hide();
    $(".map-restranut").hide();
    let valChange = this.value;
    $("." + valChange + "-number").show();
    $("." + valChange + "-map").show();
  });
/*
 
      <h5 class="title-food mb-1 mx-2"> مميزات الاكل
      </h5>
      <!--
      ! all item feature
      -->
      <div class="all-food-feature">
           <div class="owl-feature owl-theme-feature">
                <!--
      !  item feature
      -->
                <div class="item">
                     <div class="selection Feature  border-5">
                          <input id="بلايستيشن" name="feture" type="checkbox">
                          <label for="بلايستيشن" class="text-center ">
                               <img src="img/Playstaion@2x.png" alt="" srcset="">بلايستيشن
                          </label>
                     </div>
                </div>
      
                <div class="item">
                     <div class="selection Feature  border-5">
                          <input id="مكيف" name="feture" type="checkbox">
                          <label for="مكيف" class="text-center ">
                               <img src="img/air-conditioner@2x.png" alt="" srcset="">
                               مكيف </label>
                     </div>
                </div>
      
                <div class="item">
                     <div class="selection Feature border-5">
                          <input id="ممنوع" name="feture" type="checkbox">
                          <label for="ممنوع" class="text-center ">
                               <img src="img/No Smoking@2x.png" alt="" srcset="">
                               ممنوع التدخين </label>
                     </div>
                </div>
      
                <div class="item">
                     <div class="selection  Feature border-5">
                          <input id="للعائلات" name="feture" type="checkbox">
                          <label for="للعائلات" class="text-center tall-option">
                               <img src="img/family@2x.png" alt="" srcset="">
                               مناسب للعائلات </label>
                     </div>
                </div>
                <div class="item">
                     <div class="selection Feature border-5">
                          <input id="شيشه" name="feture" type="checkbox">
                          <label for="شيشه" class="text-center ">
                               <img src="img/shisha@2x.png" alt="" srcset="">
      
                               شيشه </label>
                     </div>
                </div>
                <div class="item">
                     <div class="selection Feature ">
                          <input id="قاعات" name="feture" type="checkbox">
                          <label for="قاعات" class="text-center ">
                               <img src="img/shisha@2x.png" alt="" srcset="">
      
                               قاعات </label>
                     </div>
                </div>
                <div class="item">
                     <div class="selection  Feature">
                          <input id="24ساعه" name="feture" type="checkbox">
                          <label for="24ساعه" class="text-center ">
                               <img src="img/shisha@2x.png" alt="" srcset="">
      
                               24ساعه </label>
                     </div>
                </div>
           </div>
      </div>`);
*/
if ($(".multiple-items")[0]) {
   var width = $(window).width();
   if (width > 700) {
     $(".multiple-items").slick({
       rtl: true,
       dots: false,
       arrows: false,
       loop: false,
       slidesToShow: 5.5,
       slidesToScroll: 3,
     });
   } else if (width < 700) {
     $(".multiple-items").slick({
       rtl: true,
       dots: false,
       arrows: false,
       loop: false,
       slidesToShow: 5.5,
       slidesToScroll: 3,
     });
   }
 }

 $(".advertisement .owl-carousel ,.advertisement2 .owl-carousel,.advertisement3 .owl-carousel").each(function() {
     $(".advertisement .owl-carousel").owlCarousel({
          loop: true,
          margin: 10,
          nav: false,
          dots: true,
          autoplay: true,
          autoplayTimeout: 2000,
          autoplayHoverPause: true,
          rtl: true,
          responsive: {
            0: {
              items: 1,
            },
            500: {
              items: 2,
            },
            1000: {
              items: 3,
            },
          },
        });
          $('.advertisement2 .owl-carousel').owlCarousel({
               loop: false,
               margin: 5,
               nav: false,
               dots: false,
               autoplay: false,
               autoplayHoverPause: true,
               rtl: true,
               responsive: {
                    1: {
                         items: 1,
                       },
                       300: {
                         items: 2,
                       },
                       700: {
                         items: 3,
                       },
               }
               });
               $('.advertisement3 .owl-carousel').owlCarousel({
                    loop: false,
                    margin: 10,
                    nav: false,
                    dots: false,
                    touchDrag: true,
                    mouseDrag: true,
                    autoplayHoverPause: false,
                    rtl: true,
                    responsive: {
                         1: {
                              items: 1,
                            },
                            300: {
                              items: 2,
                            },
                            700: {
                              items: 3,
                            },
                    }
                    });
   });

 
});
