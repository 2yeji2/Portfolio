//팝업;
function popup1() {
  var url =
    "https://2yeji2.github.io/Portfolio/Project/project5_design/images/banner1.png";
  var name = "popup1";
  var option = "width=1500, height=700,top=100,left=200, location=no";
  window.open(url, name, option);
}

function popup2() {
  var url =
    "https://2yeji2.github.io/Portfolio/Project/project5_design/images/banner2.png";
  var name = "popup2";
  var option = "width=1500,height=700,top=100,left=200,location=no";
  window.open(url, name, option);
}

function popup3() {
  var url =
    "https://2yeji2.github.io/Portfolio/Project/project5_design/images/banner3.png";
  var name = "popup2";
  var option = "width=1500,height=700,top=100,left=200,location=no";
  window.open(url, name, option);
}

function popup4() {
  var url =
    "https://2yeji2.github.io/Portfolio/Project/project5_design/images/banner4.png";
  var name = "popup2";
  var option = "width=1500,height=700,top=100,left=200,location=no";
  window.open(url, name, option);
}

function popup5() {
  var url =
    "https://2yeji2.github.io/Portfolio/Project/project5_design/images/card.png";
  var name = "popup2";
  var option = "width=1500,height=800,top=100,left=200,location=no";
  window.open(url, name, option);
}

function popup6() {
  var url =
    "https://2yeji2.github.io/Portfolio/Project/project5_design/images/menu.png";
  var name = "popup2";
  var option = "width=1500,height=900,top=100,left=200,location=no";
  window.open(url, name, option);
}

function popup7() {
  var url =
    "https://2yeji2.github.io/Portfolio/Project/project5_design/images/page1.png";
  var name = "popup2";
  var option = "width=1500,height=900,top=100,left=200,location=no";
  window.open(url, name, option);
}

function popup8() {
  var url =
    "https://2yeji2.github.io/Portfolio/Project/project5_design/images/page2.png";
  var name = "popup2";
  var option = "width=1500,height=900,top=100,left=200,location=no";
  window.open(url, name, option);
}

function popup9() {
  var url =
    "https://2yeji2.github.io/Portfolio/Project/project5_design/images/page3.png";
  var name = "popup2";
  var option = "width=1500,height=900,top=100,left=200,location=no";
  window.open(url, name, option);
}

function popup10() {
  var url =
    "https://2yeji2.github.io/Portfolio/Project/project5_design/images/page1.jpg";
  var name = "popup2";
  var option = "width=1500,height=900,top=100,left=200,location=no";
  window.open(url, name, option);
}

// 다크모드
$(".toggle_box span").on("click", () => {
  $("header").children("a").toggleClass("dark_mode");
  $("#project5").toggleClass("dark_mode");
  $("#project5").children(".title").toggleClass("dark_mode");
  $(".container")
    .children(".design_etc")
    .children("h1")
    .toggleClass("dark_mode");
  $(".design_etc").children("ul").children("li").toggleClass("dark_mode");
  $(".design").toggleClass("dark_mode");
  $(".design").children("h1").toggleClass("dark_mode");
  $(".design").children("p").toggleClass("dark_mode");
  $(".design").children("h2").toggleClass("dark_mode");
});
