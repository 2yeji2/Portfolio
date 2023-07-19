//fade up
AOS.init();

// darkmode
$(".toggle_box span").on("click", () => {
  $("header").children("a").toggleClass("dark_mode");
  $("#project2").toggleClass("dark_mode");
  $("#project2").children(".title").toggleClass("dark_mode");
  $(".container")
    .children(".diningnote")
    .children("h1")
    .toggleClass("dark_mode");
  $(".diningnote").children("ul").children("li").toggleClass("dark_mode");
  $("#overview").toggleClass("dark_mode");
  $("#overview").children("h3").toggleClass("dark_mode");
  $(".overview").children("ul").children("li").toggleClass("dark_mode");
  $("#ux-vision").toggleClass("dark_mode");
  $("#ux-vision").children("h3").toggleClass("dark_mode");
  $("#ux-vision").children("p").toggleClass("dark_mode");
  $("#Timeline").toggleClass("dark_mode");
  $("#Timeline").children("h3").toggleClass("dark_mode");
  $("#Timeline").children("ul").children("li").toggleClass("dark_mode");
  $("#my-role").toggleClass("dark_mode");
  $("#my-role").children("h3").toggleClass("dark_mode");
  $("#my-role").children("ul").children("li").toggleClass("dark_mode");
  $("#wire-frame").toggleClass("dark_mode");
  $("#wire-frame").children("h3").toggleClass("dark_mode");
  $("#wire-frame")
    .children("img")
    .attr({ src: "./images/wireframe_white.png", alt: "와이어프레임 화이트" });
  $("#prototype").toggleClass("dark_mode");
  $("#prototype").children("h3").toggleClass("dark_mode");
  $("#prototype")
    .children("ul")
    .children("li")
    .children("p")
    .toggleClass("dark_mode");
  $("#prototype")
    .children("ul")
    .children("li")
    .children("p")
    .children(".title")
    .toggleClass("dark_mode");
  $("#review").toggleClass("dark_mode");
  $("#review").children("h2").toggleClass("dark_mode");
  $("#review").children("ul").children("li").toggleClass("dark_mode");
  $("#review")
    .children("ul")
    .children("li")
    .children("h3")
    .toggleClass("dark_mode");
  $("footer").toggleClass("dark_mode");
  $("footer").children("a").toggleClass("dark_mode");
  $(".top-btn-svg").toggleClass("dark_mode");
});
