// 햄버거메뉴
$(".checkbox").on("click", () => {
  $(".menu").slideToggle(); // == display: block
});

// 슬라이드
var swiper = new Swiper(".mySwiper", {
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
});
