// Mini-project 1 (Age in days)
calcAge = () => {
	const date = new Date();
	const birthYear = prompt("Please Enter the Year you were born");
	const ageInDays = (date.getFullYear() - birthYear) * 365;
	document.querySelector(
		".user-age"
	).innerHTML = `Your Age is ${ageInDays} days`;
};
resetAll = () => (document.querySelector(".user-age").innerHTML = "");

// Mini-project 2 (Random Cat generator)
randomCat = () => {
	const URL = `https://api.giphy.com/v1/gifs/search?api_key=PBJeb59MKwKBFNS20aa1kcj50aoLK3Eq&q=cats
 `;

	const arry = fetch(URL)
		.then((res) => res.json())
		.then((content) => {
			const i = Math.round(Math.random() * content.pagination.count);
			const gifUrl = content.data[i].images.fixed_height.url;
			console.log(content);
			let image = document.createElement("img");
			image.classList.add("single-img");
			image.src = gifUrl;
			document
				.querySelector(".cat-img-contain")
				.insertAdjacentElement("afterbegin", image);
		})
		.catch((err) => console.log(err));
};

// Mini-project 3 (Rock, Papers, Scissors)
const threeBtns = document.querySelectorAll(".three-btn");
threeBtns.forEach((btns) => {
	btns.addEventListener("click", (e) => {
		var finalMessage;
		const userSelected = btns.getAttribute("data-text");
		const randomSelect = Math.round(Math.random() * 2);
		const compSelected = threeBtns[randomSelect].getAttribute("data-text");

		const results = {
			rock: { rock: 0.5, paper: 1, scissors: 0 },
			paper: { rock: 0, paper: 0.5, scissors: 1 },
			scissors: { rock: 1, paper: 0, scissors: 0.5 },
		};
		var yourScore = results[userSelected][compSelected];
		var compScore = results[compSelected][userSelected];

		if (yourScore === 0) {
			finalMessage = "You Lost";
			finalMessageColor = "red";
		} else if (yourScore === 0.5) {
			finalMessage = "You Tied";
			finalMessageColor = "yellow";
		} else {
			finalMessage = "You Won";
			finalMessageColor = "green";
		}
		document.querySelector(".rps-results").textContent = finalMessage;
		document.querySelector(".rps-results").style.color = finalMessageColor;
		setTimeout(
			() => (document.querySelector(".rps-results").textContent = ""),
			5000
		);

		// if (userSelected === compSelected) {
		//  console.log('Match tied');
		// } else {
		//  if (userSelected === 'rock' && compSelected === 'scissors') {
		//   console.log('you won');
		//  } else if (userSelected === 'rock' && compSelected === 'paper') {
		//   console.log('you lost');
		//  }
		//
		// }
	});
});

// Mini-project 4 (Change the Color of all buttons)
btnColorChange = (item) => {
	const allBtns = document.querySelectorAll("button");
	const colorArray = [
		"pink",
		"violet",
		"teal",
		"Aqua",
		"Aquamarine",
		"Azure",
		"Beige",
		"Bisque",
		"Black",
		"BlanchedAlmond",
		"Blue",
		"BlueViolet",
		"Brown",
		"BurlyWood",
		"CadetBlue",
		"Chartreuse",
		"Chocolate",
		"Coral",
		"CornflowerBlue",
		"Cornsilk",
		"Crimson",
		"Cyan",
		"DarkBlue",
		"DarkCyan",
		"DarkGoldenRod",
		"DarkGray",
		"DarkGrey",
		"DarkGreen",
		"DarkKhaki",
		"DarkMagenta",
		"DarkOliveGreen",
		"DarkOrange",
		"DarkOrchid",
		"DarkRed",
		"DarkSalmon",
		"DarkSeaGreen",
		"DarkSlateBlue",
		"DarkSlateGray",
		"DarkSlateGrey",
		"DarkTurquoise",
		"DarkViolet",
		"DeepPink",
		"DeepSkyBlue",
		"DimGray",
		"DimGrey",
		"DodgerBlue",
		"FireBrick",
		"FloralWhite",
		"ForestGreen",
		"Fuchsia",
		"Gainsboro",
		"GhostWhite",
		"Gold",
		"GoldenRod",
		"Gray",
		"Grey",
	];
	if (item.value === "random") {
		const randomSelect = Math.round(Math.random() * colorArray.length);
		console.log(colorArray[randomSelect]);
		allBtns.forEach(
			(btn) => (btn.style.backgroundColor = colorArray[randomSelect])
		);
	} else if (item.value === "reset") {
		allBtns.forEach((btn) => (btn.style.backgroundColor = ""));
	} else {
		allBtns.forEach((btn) => (btn.style.backgroundColor = item.value));
	}
};

// Mini-project 5 (BlackJack)
const bj = {
	user: {
		current: "you",
		score: 0,
		results: ".your-blackjack-results",
		imageContainer: ".your-img-container",
		outcomes: { win: 0, loss: 0, draw: 0 },
	},
	dealer: {
		current: "dealer",
		score: 0,
		results: ".dealer-blackjack-results",
		imageContainer: ".dealer-img-container",
	},
	isStand: false,
	turnOver: false,
};
const feedback = document.querySelector(".feedback");
const cards = [
	"2S",
	"3S",
	"4S",
	"5S",
	"6S",
	"7S",
	"8S",
	"9S",
	"10S",
	"JS",
	"QS",
	"KS",
	"AS",
	"2C",
	"3C",
	"4C",
	"5C",
	"6C",
	"7C",
	"8C",
	"9C",
	"10C",
	"JC",
	"QC",
	"KC",
	"AC",
	"2D",
	"3D",
	"4D",
	"5D",
	"6D",
	"7D",
	"8D",
	"9D",
	"10D",
	"JD",
	"QD",
	"KD",
	"AD",
	"2H",
	"3H",
	"4H",
	"5H",
	"6H",
	"7H",
	"8H",
	"9H",
	"10H",
	"JH",
	"QH",
	"KH",
	"AH",
];
const YOU = bj.user;
const DEALER = bj.dealer;
const TIED = bj.tied;

// Audio Sounds
const hitSound = new Audio("./sounds/swish.m4a");
const winSound = new Audio("./sounds/cash.mp3");
const lossSound = new Audio("./sounds/aww.mp3");

// Event Listeners
document.querySelector(".hit-btn").addEventListener("click", blackjackHit);
document.querySelector(".deal-btn").addEventListener("click", blackjackDeal);
document.querySelector(".stand-btn").addEventListener("click", dealerLogic);

// main functions

function blackjackHit() {
	if (bj.isStand === false) {
		randomCard = cards[Math.floor(Math.random() * cards.length)];
		showCard(YOU);
		// Update score
		updateScore(YOU);
	}
}

function dealerLogic() {
	bj.isStand = true;
	while (DEALER.score < 16 && bj.isStand === true) {
		randomCard = cards[Math.floor(Math.random() * cards.length)];
		showCard(DEALER);
		// Update score
		updateScore(DEALER);
	}

	bj.turnOver = true;
	computeWinner();
	updateTable();
}

function blackjackDeal() {
	if (bj.turnOver === true) {
		document.querySelector(YOU.imageContainer).textContent = "";
		document.querySelector(YOU.results).textContent = "0";
		document.querySelector(DEALER.imageContainer).textContent = "";
		document.querySelector(DEALER.results).textContent = "0";
		YOU.score = 0;
		DEALER.score = 0;
		bj.isStand = false;
	}
}

function computeWinner() {
	if (bj.turnOver === true) {
		let winner;
		// your score is less than 21
		if (YOU["score"] <= 21) {
			if (YOU["score"] > DEALER["score"] || DEALER["score"] > 21) {
				winner = YOU;
				YOU.outcomes.win++;
				showFeedback("You Won", "green");
			} else if (YOU["score"] < DEALER["score"]) {
				winner = DEALER;
				YOU.outcomes.loss++;
				showFeedback("You Lost", "red");
			} else if (YOU["score"] === DEALER["score"]) {
				YOU.outcomes.draw++;
				// winner = TIED;
				showFeedback("You Drew!", "yellow");
			}
		}
		// your score is greater than 21
		else if (YOU["score"] > 21 && DEALER["score"] <= 21) {
			winner = DEALER;
			YOU.outcomes.loss++;
			showFeedback("You Lost", "red");
		} else if (YOU["score"] > 21 && DEALER["score"] > 21) {
			// winner = TIED;
			YOU.outcomes.draw++;
			showFeedback("You Drew!", "yellow");
		}
		return winner;
	}
}

updateTable = () => {
	document.querySelector("#wins").textContent = YOU.outcomes.win;
	document.querySelector("#losses").textContent = YOU.outcomes.loss;
	document.querySelector("#draws").textContent = YOU.outcomes.draw;
};

// secondary functions
function showCard(active) {
	if (active.score < 21) {
		let cardImg = document.createElement("img");
		cardImg.src = `img/Cards/${randomCard}.jpg`;
		cardImg.style.height = "150px";
		cardImg.style.padding = "10px";
		document.querySelector(active.imageContainer).appendChild(cardImg);
		hitSound.play();
	}
}

function updateScore(active) {
	// getting the value of the card
	if (active.score < 21) {
		if (randomCard.slice(0, 2) === "10") {
			cardValue = 10;
		} else {
			afterConc = randomCard.slice(0, 1);
			if (parseInt(afterConc) < 10) {
				cardValue = parseInt(afterConc);
			} else if (afterConc === "A") {
				if (active.score + 11 < 21) {
					cardValue = 11;
				} else {
					cardValue = 1;
				}
			} else {
				cardValue = 10;
			}
		}
		// updating the value of the card
		active.score += cardValue;
		document.querySelector(active.results).textContent = active.score;

		// bust and update logic
		if (active.score > 21) {
			showSpanFeedback(active, "BUSTED");
		}
	}
}

// show feedback
function showFeedback(text, action) {
	feedback.textContent = text;
	feedback.style.fontSize = "50px";
	feedback.style.color = action;
	if (text === "You Won") {
		winSound.play();
	} else if (text === "You Lost") {
		lossSound.play();
	} else {
	}
	setTimeout(() => {
		feedback.textContent = `Let's Play`;
		feedback.style.color = "black";
		feedback.style.fontSize = "18.72px";
	}, 5000);
}

// // show SPAN feedback
function showSpanFeedback(active, text) {
	document.querySelector(active.results).textContent = text;
	document.querySelector(active.results).style.color = "red";
	setTimeout(() => {
		document.querySelector(active.results).textContent = active.score;
		document.querySelector(active.results).style.color = "white";
	}, 3000);
}
