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
$(".open_btn").on("click", (evt) => {
  evt.preventDefault();
});

//다크모드 토글
$(".mode").on("click", () => {
  $(".dark").addClass("light");
  $(".dark").children(".txt").text("Light Mode");
  $(".dark_svg").appendTo(".dark");
});
