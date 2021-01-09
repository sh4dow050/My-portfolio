// filter button
(function () {
	let filterBtn = document.querySelectorAll(".filter-btn");
	filterBtn.forEach(function (btn) {
		btn.addEventListener("click", function (e) {
			e.preventDefault();
			let value = e.target.dataset.filter;
			// console.log(value);

			let items = document.querySelectorAll(".store-item");
			items.forEach(function (item) {
				if (value === "all") {
					item.style.display = "block";
				} else {
					if (item.classList.contains(value)) {
						item.style.display = "block";
					} else {
						item.style.display = "none";
					}
				}
			});
		});
	});
})();

// search inpput
(function () {
	let search = document.getElementById("search-item");
	search.addEventListener("keyup", function () {
		let value = search.value.toLowerCase().trim();
		// console.log(value);

		let items = document.querySelectorAll(".store-item");

		items.forEach(function (item) {
			let type = item.dataset.item;

			// console.log(typeof type);
			if (type.includes(value)) {
				item.style.display = "block";
			} else {
				item.style.display = "none";
			}
		});
	});
})();

// view cart
(function () {
	let cartInfo = document.getElementById("cart-info");
	let cart = document.getElementById("cart");

	cartInfo.addEventListener("click", function () {
		cart.classList.toggle("show-cart");
	});
})();

// add items to cart
let cartBtn = document.querySelectorAll(".store-item-icon");
	let cart = document.getElementById("cart");
	let total = document.querySelector(".cart-total-container");
	cartBtn.forEach(function (btn) {
		btn.addEventListener("click", function (e) {
			// console.log(e.target);
			if (e.target.parentElement.classList.contains("store-item-icon")) {
				let imgPath = e.target.parentElement.previousElementSibling.src;
				let img = imgPath.slice(imgPath.indexOf("img") + 3);
				let itemName =
					e.target.parentElement.parentElement.nextElementSibling.children[0]
						.children[0].textContent;
				let itemPrice =
					e.target.parentElement.parentElement.nextElementSibling.children[0]
						.children[1].textContent;

				item = {};
				item.image = `img-cart${img}`;
				item.name = itemName;
				item.price = itemPrice.slice(1).trim();
			}
			let div = document.createElement("div");
			div.classList.add(
				"cart-item",
				"d-flex",
				"justify-content-between",
				"text-capitalize",
				"my-3"
			);
			div.innerHTML = `
    <img src="${item.image}" class="img-fluid rounded-circle" id="item-img" alt="">
    <div class="item-text">

     <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
     <span>$</span>
     <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
    </div>
    <a href="#" id='cart-item-remove' class="cart-item-remove">
     <i class="fas fa-trash"></i>
    </a> `;
			cart.insertBefore(div, total);
			// alert('items added to your cart')
			showTotal();
		});
	});
	function showTotal() {
		price = [];
		let totalMoney = 0;
		xyzs = document.querySelectorAll(".cart-item-price");
		xyzs.forEach(function (xyz) {
			let money = parseFloat(xyz.textContent);

			price.push(money);
			totalMoney = money + totalMoney;
		});
		console.log(totalMoney.toFixed(2));
		document.getElementById("item-count").textContent = price.length;
		document.querySelector(".item-total").textContent = totalMoney.toFixed(2);
		document.getElementById("cart-total").textContent = totalMoney.toFixed(2);
	};

// Modal setup
let imageList = [];
let counter = 0;

let images = document.querySelectorAll(".store-img");
let container = document.querySelector(".lightbox-container");
let close = document.querySelector(".lightbox-close");
let item = document.querySelector(".lightbox-item");
let btnLeft = document.querySelector(".btnLeft");
let btnRight = document.querySelector(".btnRight");

images.forEach(function (img) {
	imageList.push(img.src);
// console.log(imageList);

// add modal
images.forEach(function (img) {
	img.addEventListener("click", function (e) {
		container.classList.add("show");
		value = e.target.src;
		counter = imageList.indexOf(value);
		// console.log(value);
		item.style.backgroundImage = `url("${value}")`;
		// buttons

		console.log(counter);
		btnLeft.addEventListener("click", function () {
			counter--;
			if (counter < 0) {
				counter = imageList.length - 1;
			}
			value = imageList[counter];
			console.log(value);
			item.style.backgroundImage = `url("${value}")`;
		});
		btnRight.addEventListener("click", function () {
			if (counter > imageList.length - 2) {
				counter = 0;
			}
			counter++;
			value = imageList[counter];
			console.log(value);
			item.style.backgroundImage = `url("${value}")`;
		});
	});
});
// remove modal
close.addEventListener("click", function () {
	container.classList.remove("show");
});
