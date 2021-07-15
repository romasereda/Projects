document.addEventListener("DOMContentLoaded", () => {

  // Slider
  const sliderSections = document.querySelectorAll(".slider section.section"),
        sliderBtn      = document.querySelectorAll(".slider-button__item");



  function showSlider(index) {
    sliderSections.forEach( (slide, i) => {
      if (i != index) {
        slide.style.display = "none";
      } else {
        slide.style.display = "grid";
      }
    });

    sliderBtn.forEach( (button, i) => {
      if (i == index) {
        button.classList.add("slider-button__item--active");
        button.tabIndex = "-1";
      } else {
        button.classList.remove("slider-button__item--active");
        button.tabIndex = "0";
      }
    });
  }

  showSlider(1);

  sliderBtn.forEach( (btn, numberBtn) => {
    btn.addEventListener("click", () => {
      showSlider(numberBtn);
    });
  });

  // Tab
  const tabs        = document.querySelectorAll(".menu__tab"),
        tabContents = document.querySelectorAll(".menu__list");

  function showTabContent(index) {
    tabContents.forEach( (list, i) => {
      if (i == index) {
        list.style.display = "grid";
      } else {
        list.style.display = "none";
      }
    });
  }

  showTabContent(1);

  tabs.forEach( (tab) => {
    tab.addEventListener("click", (e) => {
      tabs.forEach( (item, index) => {
        item.classList.remove("menu__tab--active");
        item.tabIndex = "0";

        if (item == e.target) {
          showTabContent(index);
        }
      });

      e.target.classList.add("menu__tab--active");
      e.target.tabIndex = "-1";

    });
  });

  // slider-image
  $(document).ready(function(){
    $('.slider-image__list').slick({
      autoplay: true,
      autoplaySpeed: 1000,
      arrows: false,
      slidesToShow: 4,
      swipe: false,
      pauseOnFocus: false,
      pauseOnHover: false,
    });
  });

  // scroll
  $(".header-content__button").click(function() {
    $("html").animate({
        scrollTop: $("main").offset().top
    }, 700);
  });

  // menu
  $(".navigation__link").click(function() {
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top - $(".menu").height() + "px"
    }, {
      duration: 1500,
      easing: "swing"
    });
    return false;
  });
  
  const menu = document.querySelector(".menu");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset != 0) {
      menu.classList.add("menu--fixed");
    } else {
      menu.classList.remove("menu--fixed");
    }
  });

});
