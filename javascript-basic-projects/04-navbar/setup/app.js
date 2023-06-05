const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function() {
	// if (links.classList.contains("show-links")) {
	// 	links.classList.remove("show-links");
	// } else {
	// 	links.classList.add("show-links");
	// }

	// toggle method
	links.classList.toggle("show-links");
});
