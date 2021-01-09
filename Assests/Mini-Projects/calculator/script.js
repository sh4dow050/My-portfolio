(function () {
 let btns = document.querySelectorAll('.btn');
 let equal = document.querySelector('.btn-equal');
 let clear = document.querySelector('.btn-clear');
 let screen = document.querySelector('.screen');

 btns.forEach(function (btn) {
  btn.addEventListener('click', function () {
   let number = btn.getAttribute('data-num');
   screen.value += number;
  });
 });

 equal.addEventListener('click', function () {
  let value = eval(screen.value);
  screen.value = value;
 });
 clear.addEventListener('click', function () {
  screen.value = '';
 });

})();