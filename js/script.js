window.addEventListener("DOMContentLoaded", () => {
  const wideContent = document.querySelector(".pr-content__more"),
    mainContent = document.querySelector(".promo__content"),
    itemHide = document.querySelector(".pr-content__items_hide"),
    menu = document.querySelector(".menu"),
    menuItem = document.querySelectorAll(".menu_item"),
    hamburger = document.querySelector(".hamburger"),
    prItems = document.querySelectorAll(".hd");

  let delay = 600;

  wideContent.addEventListener("click", () => {
    wideContent.classList.toggle("pr-content__more_active");
    mainContent.classList.toggle("promo__content_active");
    prItems.forEach((item) => {
      setTimeout(() => {
        item.classList.toggle("dissapear");
      }, delay);
      delay += 150;
    });
    delay = 500;
  });

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    menu.classList.toggle("menu_active");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger_active");
      menu.classList.toggle("menu_active");
    });
  });

  const swiper = new Swiper(".swiper-container", {
    // Optional parameters
    slidesPerView: 1,
    centeredSlides: true,
    slidesOffsetBefore: 10,
    loop: true,
    spaceBetween: 50,
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },

    flipEffect: {
      slideShadows: false,
    },

    breakpoints: {
      // when window width is >=
      576: {
        slidesOffsetBefore: 150,
      },
    },
  });

  new Swiper(".swiper-container-trending", {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 15,
    loop: true,
    parallax: false,
    speed: 855,
    // Navigation arrows
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },

    flipEffect: {
      slideShadows: false,
    },

    breakpoints: {
      // when window width is >=
      768: {
        parallax: true,
      },
    },
  });
});
