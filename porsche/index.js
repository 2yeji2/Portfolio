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

//opacity
gsap.registerPlugin(ScrollTrigger);
const fadeElement = document.querySelector(".scaleDown");
gsap.to(fadeElement, {
  opacity: 1, // 최종적으로 적용될 opacity 값
  scrollTrigger: {
    trigger: ".section2", // 스크롤 트리거로 사용할 요소
    start: "top -50%", // 애니메이션이 시작할 위치 (top 80% 지점)
    end: "bottom 10%", // 애니메이션이 끝날 위치 (bottom 20% 지점)
    scrub: true, // 스크롤에 따라 부드럽게 애니메이션을 적용
  },
});

//스크롤이미지
gsap.set(".scaleDown", { xPercent: -50, yPercent: -50 });
gsap.to(".scaleDown", {
  scale: 101,
  scrollTrigger: {
    trigger: ".section2",
    pin: ".section2",
    scrub: true,
  },
});

// 글씨나타남
