document.addEventListener("DOMContentLoaded", () => {

  // drop-menu
  const dropMenuBtns = document.querySelectorAll(".navigation__element--drop"),
        dropMenuList = document.querySelectorAll(".navigation__drop-list");

  dropMenuBtns.forEach( (btn, i) => {
      btn.addEventListener("click", () => {

        if ( btn.classList.contains("navigation__element--active") ) {
          dropMenuBtns.forEach( (button) => {
            button.classList.remove("navigation__element--active");
          });
          dropMenuList.forEach( (menu) => {
            menu.style.display = "none";
          });
        } else {
          dropMenuBtns.forEach( (button) => {
            button.classList.remove("navigation__element--active");
          });
          btn.classList.add("navigation__element--active");
          dropMenuList.forEach( (menu) => {
            menu.style.display = "none";
          });
          dropMenuList[i].style.display = "block";
        }

      });
  });

  // show menu-popup
  $(".hamburger").click( () => {
    if ( $(".hamburger").hasClass("is-active") ) {
      $(".hamburger").removeClass("is-active");
      $(".menu-popup").css("display", "none");
    } else {
      $(".hamburger").addClass("is-active");
      $(".menu-popup").css("display", "flex");
    }
  });

  $(window).resize( () => {
    if ( $(document).width() > 820 ) {
      $(".hamburger").removeClass("is-active");
      $(".menu-popup").css("display", "none");
    }
  });


  // slider
  $(".slider-header").slick({
    dots: true,
    speed: 1500
  });

  document.querySelectorAll(".slider-header__wrapper")[1].style.display = "flex";

  $(".slider-header").on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $(".slider-header__wrapper").css("display", "none");
  });

  $(".slider-header").on('afterChange', function(event, slick, currentSlide){
    document.querySelectorAll(".slider-header__wrapper")[++currentSlide].style.display = "flex";
  });

  // products
  const products = document.querySelectorAll(".products__item");

  function showProducts(elem) {
      $(products).css("display", "none");

      for (let i = 0; i < elem; i++) {
        products[i].style.display = "flex";
      }
  }

  if ( $(document).width() > 768 ) {
    showProducts(8);
  } else {
    showProducts(4);
  }

  $(".button-show").click( () => {
    if ( $(".button-show").hasClass("button-show--hide") ) {
      showProducts(8);
      $(".button-show").removeClass("button-show--hide");
      $(".button-show").html("Show More");
    } else {
      showProducts(products.length);
      $(".button-show").addClass("button-show--hide");
      $(".button-show").html("Hide");
    }
  });

  // rooms
  $(".slider-rooms").slick({
    dots: true,
    speed: 1000
  });

  document.querySelectorAll(".slider-rooms__wrapper")[1].style.display = "block";

  $(".slider-rooms").on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $(".slider-rooms__wrapper").css("display", "none");
  });

  $(".slider-rooms").on('afterChange', function(event, slick, currentSlide){
    document.querySelectorAll(".slider-rooms__wrapper")[++currentSlide].style.display = "block";
  });

  // tips
  $(".slider-tips").slick({
    dots: true,
    speed: 1000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }); 

});
