// 햄버거메뉴
$("#toggle").click(function () {
  $("#toggle .bar").toggleClass("animate");
  $("#page").toggleClass("overlay");
});

//헤더
let prevScroll = window.scrollY;
// console.log(prevScroll);

$(window).on("scroll", () => {
  // 스크롤시 변수에 저장
  let currentScroll = window.scrollY;
  // console.log("currentScroll: ", currentScroll);
  // console.log("1 prevScroll: ", prevScroll);

  // 이전 스크롤 값이 크면 true, 스크롤을 올리면 header 보임
  if (prevScroll > currentScroll) {
    // $('header').show();
    $("header").css({ top: 0 });
  } else {
    // 이후 스크롤 값이 크면 false, 스크롤을 내리면 header 숨김
    // $('header').hide();
    $("header").css({ top: -100 });
    $("header").toggleClass("active");
  }
  // prev에 현재 스크롤 값 대입
  prevScroll = currentScroll;
  // console.log("2 prevScroll: ", prevScroll);
});

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
    end: "bottom 1%", // 애니메이션이 끝날 위치 (bottom 20% 지점)
    scrub: true, // 스크롤에 따라 부드럽게 애니메이션을 적용
  },
});

//스크롤이미지
gsap.set(".scaleDown", { xPercent: -50, yPercent: -50 });
gsap.to(".scaleDown", {
  scale: 102,
  scrollTrigger: {
    trigger: ".section2",
    pin: ".section2",
    scrub: true,
  },
});

// 글씨나타남
addEventListener("scroll", () => {
  console.log(scrollY);
  if (scrollY > sact3.offsetTop - (vh + (vh / 10) * 2)) {
    const txtbox = document.querySelector(".boxter");
    $(txtbox).children("h2").css({ opacity: 1 });
    $(txtbox).children("p").css({ opacity: 1 });
  } else {
    const txtbox = document.querySelector(".boxter");
    $(txtbox).children("h2").css({ opacity: 0 });
    $(txtbox).children("p").css({ opacity: 0 });
  }
});

document.querySelector(".section3");

const sact3 = document.querySelector(".section3");
console.log(sact3.offsetTop);

const vh = document.documentElement.clientHeight;
console.log(scrollY, sact3.offsetTop - vh);
