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

//다크모드 적용
$(".toggle_box span").on("click", () => {
  $("#first-main").toggleClass("dark_mode");
  $(".title").toggleClass("dark_mode");
  $(".suv-title").toggleClass("dark_mode");
  $(".menu").toggleClass("dark_mode");
  $("#second-main").toggleClass("dark_mode");
  $(".me1").toggleClass("dark_mode");
  $(".pers").children("p").eq(0).toggleClass("dark_mode");
  $(".pers").children("p").eq(1).toggleClass("dark_mode");
  $(".pers").children("p").eq(2).toggleClass("dark_mode");
  $(".pers").children("p").eq(3).toggleClass("dark_mode");
  $(".pers").children("p").eq(4).toggleClass("dark_mode");
  $(".pers").children("p").eq(5).toggleClass("dark_mode");
  $("#third-main").toggleClass("dark_mode");
  $(".skill").children("p").eq(0).toggleClass("dark_mode");
  $(".skill").children("p").eq(1).toggleClass("dark_mode");
  $(".skill").children("p").eq(2).toggleClass("dark_mode");
  $(".skill").children("p").eq(3).toggleClass("dark_mode");
  $(".skill").children("p").eq(4).toggleClass("dark_mode");
  $(".skill").children("p").eq(5).toggleClass("dark_mode");
  $(".skill").children("p").eq(6).toggleClass("dark_mode");
  $(".skill").children("p").eq(7).toggleClass("dark_mode");
  $("#fourth-main").toggleClass("dark_mode");
  $(".project_name").toggleClass("dark_mode");
  $(".gotoPj").toggleClass("dark_mode");
  $(".project-img").toggleClass("dark_mode");
  $(".box").toggleClass("dark_mode");
});
