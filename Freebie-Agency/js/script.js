document.addEventListener("DOMContentLoaded", () => {

  // header slider
  const swiperHeader = new Swiper(".header-slider", {
    speed: 1750,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    autoplay: {
      delay: 2500
    }
  });

  // menu
  const menuBtn = document.querySelector(".hamburger"),
        menu    = document.querySelector(".navigation");

  menuBtn.addEventListener("click", () => {
    if ( menuBtn.classList.contains("is-active") ) {
      menuBtn.classList.remove("is-active");
      menu.style.left = "100%";
      document.querySelector("body").style.overflowY = "auto";
    } else {
      menuBtn.classList.add("is-active");
      menu.style.left = "0%";
      menu.style.transition = "left 1s ease-out";
      document.querySelector("body").style.overflowY = "hidden";
    }
  });

  window.addEventListener("resize", () => {
    if (document.documentElement.clientWidth < 550) {
      menu.style.left = "100%";
      menuBtn.classList.remove("is-active");
    } else {
      menu.style.left = "0%";
      menu.style.transition = "none";
    }
  });

  // animation elements
  const blockLeft      = document.querySelector(".about__block--left"),
        blockRight     = document.querySelector(".about__block--right"),
        blockGreen     = document.querySelector(".about__block--bg-green"),
        blockTextLeft  = document.querySelector(".about__text-left"),
        blockTextRight = document.querySelector(".about__text-right"),
        about          = document.querySelector(".about"),
        services         = document.querySelector(".services"),
        servicesBlocks = document.querySelectorAll(".services__item");

  window.addEventListener("scroll", () => {

    if (window.scrollY > about.getBoundingClientRect().top) {
      blockLeft.classList.add("anim-block-left");
      blockRight.classList.add("anim-block-right");
      blockGreen.classList.add("anim-block-show");
      if (document.documentElement.offsetWidth > 620) {
        blockTextLeft.classList.add("anim-text");
        blockTextRight.classList.add("anim-text");
      } else {
        blockTextLeft.classList.add("anim-text-nodelay");
        blockTextRight.classList.add("anim-text-nodelay");
      }
    }

    if (window.scrollY > services.getBoundingClientRect().top) {
      servicesBlocks.forEach( (block, index) => {
        if (index == 0) {
          block.classList.add("services__item--anim-nodealy");
        }
        if (index == 1) {
          block.classList.add("services__item--anim-delay-03");
        }
        if (index == 2) {
          block.classList.add("services__item--anim-delay-06");
        }
      });
    }

  });

  // tabs
  const tabs          = document.querySelectorAll(".tab"),
        tabContent    = document.querySelectorAll(".works__item"),
        buttonShowTab = document.querySelector(".works__wrapper-button");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      showTab(tab);
    });
  });

  function showTab(tab) {

    tabs.forEach(elem => {
      if (elem == tab) {
        elem.classList.add("tab--active");
        elem.tabIndex = "-1";
      } else {
        elem.classList.remove("tab--active");
        elem.tabIndex = "0";
      }
    });

    const section     = tab.dataset.section,
          arrayBlocks = [];

    if (section == "all") {

      tabContent.forEach((block, i) => {
        arrayBlocks.push(block);
        block.style.display = "flex";
        if (i % 2 != 0) {
          block.classList.add("works__item--left");
        } else {
          block.classList.remove("works__item--left");
        }
      });

    } else {

      tabContent.forEach( block => {
        block.style.display = "none";
        block.classList.remove("works__item--left");
      });

      tabContent.forEach( block => {
        if (block.dataset.section == section) {
          arrayBlocks.push(block);
        }
      });
      
      arrayBlocks.forEach( (block, i, array) => {
        block.style.display = "flex";
        if (i % 2 != 0) {
          block.classList.add("works__item--left");
        }
      });

    }

    if (arrayBlocks.length > 2) {
      arrayBlocks.forEach( (block, i) => {
        if (i > 3) {
          block.style.display = "none";
          buttonShowTab.style.display = "flex";
          buttonShowTab.addEventListener("click", showContent);
        } else {
          buttonShowTab.style.display = "none";
        }
      });
    }

    function showContent() {
      arrayBlocks.forEach(block => {
        block.style.display = "flex";
      });
      buttonShowTab.innerHTML = "<button class='button works__button-show'>Hide</button>";
      buttonShowTab.removeEventListener("click", showContent);
      buttonShowTab.addEventListener("click", hideContent);
    }

    function hideContent() {
      arrayBlocks.forEach( (block, i) => {
        if (i > 3) {
          block.style.display = "none";
        }
        buttonShowTab.innerHTML = "<button class='button works__button-show'>View more</button>";
        buttonShowTab.removeEventListener("click", hideContent);
        buttonShowTab.addEventListener("click", showContent);
      });
    }

  }

  showTab(tabs[0]);

  // comments slider
  const swiperComments = new Swiper(".comments", {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

});
