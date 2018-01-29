function toggleMenu() {
	var top_nav = document.getElementById("top-nav");
	var icon = document.getElementById("toggle-icon");
	if (top_nav.className === "top-nav"){
		top_nav.className += " toggle-open";
		icon.innerHTML = "&#10005; Close Menu";
	} else{
		top_nav.className = "top-nav";
		icon.innerHTML = "&#9776; Menu";
	}
}