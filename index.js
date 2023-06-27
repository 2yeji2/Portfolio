// 메뉴안 contact 버튼 열기
$(".open_btn").on("click", () => {
  $(".contactbox").css({ display: "flex" });
});

// 메뉴안 contact 버튼 닫기
$(".contactbox")
  .children(".close_btn")
  .on("click", () => {
    $(".contactbox").css({ display: "none" });
  });

// a태그 막기
$(function () {
  $(".open_btn").on("click", function (e) {
    e.preventDefault();
  });
});
