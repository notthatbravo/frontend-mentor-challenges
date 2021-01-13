let btn = document.getElementById("toggle_container");
let topHeader = document.querySelector(".header_background");
let card = document.getElementsByClassName("card");

btn.addEventListener("click", toggleDarkMode);

function toggleDarkMode() {
	document.body.style.backgroundColor = "var(--VDarkBlue)";
	topHeader.style.backgroundColor = "var(--Vdblue)";
	topHeader.style.borde = "var(--Vdblue)";
	card.style.backgroundColor = "var(--ddesatblue)";
}
