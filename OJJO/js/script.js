document.addEventListener("DOMContentLoaded", () => {

  // header, modal-menu
  const modalMenu        = document.querySelector(".modal-menu"),
        modalMenuBtnShow = document.querySelector(".hamburgers-show"),
        modalMenuBtnHide = document.querySelector(".hamburgers-close");

  modalMenuBtnShow.addEventListener("click", () => {
    modalMenu.classList.remove("hide");
    modalMenu.classList.add("show");
    document.documentElement.style.overflow = "hidden";
  });

  modalMenuBtnHide.addEventListener("click", () => {
    modalMenu.classList.remove("show");
    modalMenu.classList.add("hide");
    document.documentElement.style.overflow = "auto";
  });

  //Tabs
  const tabs           = document.querySelectorAll(".tab"),
        tabContentList = document.querySelectorAll(".groups__item--tab");
  
  tabs.forEach(tab => {
    tab.addEventListener("click", (event) => {

      const target = event.target;

      tabs.forEach(itemTab => {
        itemTab.classList.remove("tab--disabled");
        itemTab.tabIndex = "0";
      });

      tab.classList.add("tab--disabled");
      tab.tabIndex = "-1";

      showTabContent(target);

    });
  });

  function showTabContent(element) {
    tabContentList.forEach(item => {
        
      item.classList.remove("show");
      item.classList.add("hide");

      if ( item.hasAttribute(element.dataset.group) ) {
        item.classList.remove("hide");
        item.classList.add("show");
      }

    });
  }

  showTabContent(tabs[0]);

  // modal close
  const modals = document.querySelectorAll(".modal"),
        modalsBtnClose = document.querySelectorAll(".hamburgers--form-close");

  modals.forEach(modal => {

    modal.addEventListener("click", (e) => {

      if ( e.target.classList.contains("modal") ) {
        
        document.documentElement.style.overflow = "auto";

        modal.classList.remove("modal-show");
        modal.classList.add("modal-hide");
      
      }
  
    });

  });

  modalsBtnClose.forEach(btn => {
    btn.addEventListener("click", (e) => {
      
      e.preventDefault();

      document.documentElement.style.overflow = "auto";

      const parentModal = btn.closest(".modal");
      
      parentModal.classList.remove("modal-show");
      parentModal.classList.add("modal-hide");

    });
  });

  // modal search
  const searchBlock   = document.querySelector(".modal--search"),
        searchBtnShow = document.querySelector(".search-button-show");

  searchBtnShow.addEventListener("click", (e) => {

    e.preventDefault();

    document.documentElement.style.overflow = "hidden";

    searchBlock.classList.remove("modal-hide");
    searchBlock.classList.add("modal-show");

  });

  // modal search
  const loginBlock   = document.querySelector(".modal--login"),
        loginBtnShow = document.querySelector(".login-button-show");

  loginBtnShow.addEventListener("click", (e) => {

  e.preventDefault();

    document.documentElement.style.overflow = "hidden";  

  loginBlock.classList.remove("modal-hide");
  loginBlock.classList.add("modal-show");

  });

  // Catalog legend
  const catalogLegends = document.querySelectorAll(".catalog-form__legend"),
        catalogBlock   = document.querySelectorAll(".catalog-form__wrapper");

  catalogLegends.forEach( (legend, i) => {
    legend.addEventListener("click", () => {
      if (legend.classList.contains("catalog-form__legend--active")) {
        legend.classList.remove("catalog-form__legend--active");
        catalogBlock[i].classList.remove("show");
        catalogBlock[i].classList.add("hide");
      } else {
        catalogLegends.forEach( (item, index) => {
          item.classList.remove("catalog-form__legend--active");
          catalogBlock[index].classList.remove("show");
          catalogBlock[index].classList.add("hide");
        });

        legend.classList.add("catalog-form__legend--active");
        catalogBlock[i].classList.add("show");
      }
    });
  });

  // Info
  const infoText = document.querySelector(".info__text"),
        infoBtn  = document.querySelector(".info__button");

  infoBtn.addEventListener("click", (e) => {

    e.preventDefault();

    if ( infoBtn.classList.contains("info__button--show") ) {
      infoBtn.classList.remove("info__button--show");
      infoBtn.classList.add("info__button--hide");
      infoBtn.textContent = "Скрыть текст";
      infoText.classList.remove("info__text--hide");
      infoText.classList.add("info__text--show");
    } else if ( infoBtn.classList.contains("info__button--hide") ) {
      infoBtn.classList.remove("info__button--hide");
      infoBtn.classList.add("info__button--show");
      infoBtn.textContent = "Читать полностью";
      infoText.classList.remove("info__text--show");
      infoText.classList.add("info__text--hide");
    }

  });

  // slider
  const sliderImages = document.querySelectorAll(".slider__image-big"),
        sliderBtns   = document.querySelectorAll(".slider__item");

  sliderBtns.forEach( (btn, i) => {
    btn.addEventListener("click", () => {
      sliderImages.forEach( (slide, sliderIndex) => {
        if (i == sliderIndex) {
          slide.classList.remove("hide");
          slide.classList.add("show");
        } else {
          slide.classList.remove("show");
          slide.classList.add("hide");
        }
      });
    });
  });

});
