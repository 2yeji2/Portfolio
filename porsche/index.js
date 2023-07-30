// 햄버거메뉴
$("#toggle").click(function () {
  $("#toggle .bar").toggleClass("animate");
  $("#page").toggleClass("overlay");
});

// 헤더

// 각 박스 안에 움직이는 이미지
const movingImg = (evt) => {
  let x = evt.clientX;
  let y = evt.clientY;

  $(".about").css({ right: -20 + x / 30, bottom: -10 + y / 30 });

  requestAnimationFrame(movingImg);
};
$(".about").on("mousemove", movingImg);

//페이드인
AOS.init();

//스크롤이미지
