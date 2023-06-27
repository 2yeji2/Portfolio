// 메뉴안 contact 버튼 열기
$(".open_btn").on("click", () => {
  $(".contactbox").css({ display: "flex" });
});

// 메뉴안 contact 버튼 닫기
$(".contactbox")
  .children("svg:last-child")
  .on("click", () => {
    $(".contactbox").css({ display: "none" });
  });
