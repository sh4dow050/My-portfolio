$(document).ready(function () {
  $(".nav-head i").click(changeNav);

  function changeNav() {
    $(".nav-links ul").toggle(200);
  }
});