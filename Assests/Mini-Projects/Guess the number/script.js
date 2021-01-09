var checkBtn = document.getElementById("check-btn");
var answer = document.querySelector(".answer");
const feedback = document.querySelector(".feedback");
var resetBtn = document.getElementById("reset-btn");
var number;
var guessList = document.querySelector(".guess-list");

number = Math.floor(Math.random() * 100);
console.log(number);

resetBtn.addEventListener("click", function () {
	number = Math.floor(Math.random() * 100);
	guessList.textContent = "";
});

checkBtn.addEventListener("click", function (e) {
	var value = answer.value;
	if (value === "") {
		alert("Enter a value");
	} else {
		if (value == number) {
			showFeedback("You Guessed correct", "rgb(144, 235, 8)");
			number = Math.floor(Math.random() * 100);
			console.log(number);
		} else if (value > number) {
			showFeedback("You Guessed too high", "red");
		} else {
			showFeedback("You Guessed too low", "red");
			s;
		}

		let div = document.createElement("div");
		div.classList.add("guesses");
		div.textContent = `You Guessed ${value}`;
		guessList.appendChild(div);
		answer.value = "";
	}
});

function showFeedback(text, action) {
	feedback.classList.add("showItem");
	feedback.style.color = `${action}`;
	feedback.textContent = text;
	setTimeout(function () {
		feedback.classList.remove("showItem");
	}, 3000);
}
