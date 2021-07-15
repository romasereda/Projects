document.addEventListener("DOMContentLoaded", () => {

  // navigation
  const nav = $(".navigation"),
        navBtn = $(".hamburger");

  navBtn.click( () => {

    if (navBtn.hasClass("is-active")) {
      navBtn.removeClass("is-active");
      nav.removeClass("navigation--anim-show");
      nav.addClass("navigation--anim-hide");
    } else {
      navBtn.addClass("is-active");
      nav.removeClass("navigation--anim-hide");
      nav.addClass("navigation--anim-show");
    }

  });

  $(window).resize( () => {
    if ( $(document).width() > 700) {
      navBtn.removeClass("is-active");
      nav.removeClass("navigation--anim-hide");
      nav.removeClass("navigation--anim-show");
    }
  });

});
