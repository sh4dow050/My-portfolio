let changeBtn = document.querySelector(".change-color");
let body = document.querySelector("body");
let hexCode = document.querySelector(".hex-code");

let ColorArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

changeBtn.addEventListener("click", function () {
	let color = "#";
	for (i = 0; i < 6; i++) {
		random = Math.round(Math.random() * (ColorArray.length - 1));
		value = ColorArray[random];
		color = color + value;
	}
	body.style.backgroundColor = color;
	hexCode.textContent = `${color}`;
});
