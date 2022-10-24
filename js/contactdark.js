//dark mode
function darkmode() {
	var bgBodyDark = document.querySelector("body");
	var navbarIcon = document.querySelector("#darkLight");
	console.log(title);
	//đổi màu body
	if (navbarIcon.className == "fa-solid fa-moon") {
		navbarIcon.className = "fa-solid fa-sun";
		bgBodyDark.style.backgroundColor = "#232220";
	} else {
		navbarIcon.className = "fa-solid fa-moon";
		bgBodyDark.style.backgroundColor = "white";
	}
	//đổi màu title
	var title = document.querySelectorAll(".title");
	for (var i = 0; i < title.length; i++) {
		if (title[i].classList.contains("title-dark")) {
			title[i].classList.remove("title-dark");
		} else {
			title[i].classList.add("title-dark");
		}
	}
	//đổi màu text p
	var pheader = document.querySelector(".header-title>p");
	if (pheader.classList.contains("pheader-dark")) {
		pheader.classList.remove("pheader-dark");
	} else {
		pheader.classList.add("pheader-dark");
	}
	//đổi màu input
	var input = document.querySelectorAll("input");
	var textarea = document.querySelectorAll("textarea");
	for (var i = 0; i < input.length; i++) {
		if (input[i].classList.contains("input-dark")) {
			input[i].classList.remove("input-dark");
		} else {
			input[i].classList.add("input-dark");
		}
	}
	for (var i = 0; i < textarea.length; i++) {
		if (textarea[i].classList.contains("textarea-dark")) {
			textarea[i].classList.remove("textarea-dark");
		} else {
			textarea[i].classList.add("textarea-dark");
		}
	}

	// đổi màu h5+p dark phần map
	var h5dark = document.querySelectorAll("h5");
	var adark = document.querySelectorAll(".cont-right>p>a");
	console.log(adark);
	for (var i = 0; i < h5dark.length; i++) {
		if (h5dark[i].classList.contains("h5-dark")) {
			h5dark[i].classList.remove("h5-dark");
		} else {
			h5dark[i].classList.add("h5-dark");
		}
	}
	for (var i = 0; i < adark.length; i++) {
		if (adark[i].classList.contains("a-dark")) {
			adark[i].classList.remove("a-dark");
		} else {
			adark[i].classList.add("a-dark");
		}
	}

	//đổi màu iframe
	var iframe = document.querySelector("iframe");
	if (iframe.classList.contains("iframe-dark")) {
		iframe.classList.remove("iframe-dark");
	} else {
		iframe.classList.add("iframe-dark");
	}
	// Banner Section
	var bannerSubsite = document.querySelector(".banner-subsite");
	if (bannerSubsite.className == "banner-subsite") {
		bannerSubsite.classList.toggle("banner-subsite-darkmodee");
	} else {
		bannerSubsite.classList.remove("banner-subsite-darkmodee");
	}
}
