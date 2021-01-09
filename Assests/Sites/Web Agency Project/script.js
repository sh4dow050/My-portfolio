$(document).ready(function () {
  $(".nav-head_icon").click(changeNav);

  function changeNav() {
    $(".nav-links").toggle(20);
  }
});