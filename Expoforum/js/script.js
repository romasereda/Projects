document.addEventListener("DOMContentLoaded", () => {

  // form search 
  $(".search-button").click( () => {
    $(".form-search").addClass("form-search--show");
  });

  $(".form-search__hamburger").click( () => {
    $(".form-search").removeClass("form-search--show");
  });

  // menu
  $(".header__hamburger").click( () => {
    if ( $(".header__hamburger").hasClass("is-active") ) {
      $(".header__hamburger").removeClass("is-active");
      $(".navigation__list").css("animation", "hideMenu ease-out 0.7s forwards");
      $("body").css("overflow-y", "auto");
    } else {
      $(".header__hamburger").addClass("is-active");
      $(".navigation__list").css("animation", "showMenu ease-out 0.7s forwards");
      $("body").css("overflow-y", "hidden");
    }
  });

  $(window).resize( () => {
    if ( $(document).width() > 900 ) {
      $(".header__hamburger").removeClass("is-active");
      $(".navigation__list").css("animation", "none");
    }
  });

});
