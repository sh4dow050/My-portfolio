const navBtn = document.querySelector(".nav-btn");
const navLinks = document.querySelectorAll(".nav-links a");

navBtn.addEventListener("click", () => {
	navLinks.forEach((item) => {
		item.classList.toggle("show");
	});
	document.querySelector(".line-1").classList.toggle("rotate-1");
	document.querySelector(".line-2").classList.toggle("rotate-2");
	document.querySelector(".line-3").classList.toggle("rotate-3");
});
