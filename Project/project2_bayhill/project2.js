//fade up
AOS.init();

// 다크모드
$(".toggle_box span").on("click", () => {
  $("header").children("a").toggleClass("dark_mode");
  $("#project2").toggleClass("dark_mode");
  $("#project2").children(".title").toggleClass("dark_mode");
  $(".container").children(".bayhill").children("h1").toggleClass("dark_mode");
  $(".bayhill").children("ul").children("li").toggleClass("dark_mode");
  $("#overview").toggleClass("dark_mode");
  $("#overview").children("h3").toggleClass("dark_mode");
  $(".overview").children("ul").children("li").toggleClass("dark_mode");
  $("#styleguide").toggleClass("dark_mode");
  $("#styleguide").children("h3").toggleClass("dark_mode");
  $("#styleguide").children("ul").children("li").toggleClass("dark_mode");
  $("#styleguide").children(".color").toggleClass("dark_mode");
  $("#Timeline").toggleClass("dark_mode");
  $("#Timeline").children("h3").toggleClass("dark_mode");
  $("#Timeline").children("ul").children("li").toggleClass("dark_mode");
  $("#my-role").toggleClass("dark_mode");
  $("#my-role").children("h3").toggleClass("dark_mode");
  $("#my-role").children("ul").children("li").toggleClass("dark_mode");
  $("#publishing").toggleClass("dark_mode");
  $("#publishing").children("h3").toggleClass("dark_mode");
  $("#publishing").children(".guide").toggleClass("dark_mode");
  $(".publishing").children("ul").children("li").toggleClass("dark_mode");
  $(".publishing")
    .children("ul")
    .children("li")
    .children("p")
    .toggleClass("dark_mode");
  $(".publishing")
    .children("ul")
    .children("li")
    .children(".tech")
    .toggleClass("dark_mode");
  $("#result").toggleClass("dark_mode");
  $("#result").children("h3").toggleClass("dark_mode");
  $("#result").children("ul").children("li").toggleClass("dark_mode");
  $("#review").toggleClass("dark_mode");
  $("#review").children("h3").toggleClass("dark_mode");
  $("#review").children("ul").children("li").toggleClass("dark_mode");
  $("footer").toggleClass("dark_mode");
  $("footer").children("a").toggleClass("dark_mode");
  $(".top-btn-svg").toggleClass("dark_mode");
});
