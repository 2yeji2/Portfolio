//fade up
AOS.init();

//다크모드
$(".toggle_box span").on("click", () => {
  $("header").children("a").toggleClass("dark_mode");
  $("#project1").toggleClass("dark_mode");
  $("#project1").children(".title").toggleClass("dark_mode");
  $(".threece").children("h1").toggleClass("dark_mode");
  $(".threece").children("ul").children("li").toggleClass("dark_mode");
  $("#overview").toggleClass("dark_mode");
  $("#overview").children("h3").toggleClass("dark_mode");
  $(".overview").children("ul").children("li").toggleClass("dark_mode");
  $("#design").toggleClass("dark_mode");
  $("#design").children("h3").toggleClass("dark_mode");
  $(".design")
    .children("ul")
    .children("li")
    .children("h4")
    .toggleClass("dark_mode");
  $(".design")
    .children("ul")
    .children("li")
    .children("p")
    .toggleClass("dark_mode");
  $(".design").children(".pallet").toggleClass("dark_mode");
  $("#publishing").toggleClass("dark_mode");
  $("#publishing").children("h3").toggleClass("dark_mode");
  $(".publishing")
    .children("ul")
    .children("li")
    .children("h4")
    .toggleClass("dark_mode");
  $(".publishing")
    .children("ul")
    .children("li")
    .children("p")
    .toggleClass("dark_mode");
  $("footer").toggleClass("dark_mode");
  $("footer").children("a").toggleClass("dark_mode");
  $(".top-btn-svg").toggleClass("dark_mode");
});