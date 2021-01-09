$(document).ready(function () {
  // $(".nav-links").hide();
  $(".menu-btn").click(changeNav);

  function changeNav() {
    $(".links").toggle(20);
    // $(".menu-btn").toggleClass("turn");
  }
})
