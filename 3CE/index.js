$(window)
  .resize(function () {
    if (window.innerWidth > 1200) {
      // 슬라이드
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        scrollbar: {
          el: ".swiper-scrollbar",
          hide: false,
        },
      });
    } else {
      var swiper = new Swiper(".mySwiper", {
        scrollbar: {
          el: ".swiper-scrollbar",
          hide: false,
        },
      });
    }
  })
  .resize();

// 햄버거메뉴
$(".checkbox").on("click", () => {
  $(".mo-tb-menu").slideToggle();
  $(".mo-tb-menu").toggleClass("hide");
});
