function darkmode() {
	var bgBlogDark = document.querySelector(".blog");
	var navbarIcon = document.querySelector("#darkLight");
	//đổi màu body
	if (navbarIcon.className == "fa-solid fa-moon") {
		navbarIcon.className = "fa-solid fa-sun";
		bgBlogDark.style.backgroundColor = "#282828";
	} else {
		navbarIcon.className = "fa-solid fa-moon";
		bgBlogDark.style.backgroundColor = "white";
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
	//đổi màu a item__main
	var aItemMain = document.querySelectorAll(".item__main>a");
	for (var i = 0; i < aItemMain.length; i++) {
		if (aItemMain[i].classList.contains("a-dark")) {
			aItemMain[i].classList.remove("a-dark");
		} else {
			aItemMain[i].classList.add("a-dark");
		}
	}
	//đổi màu p item__main
	var pItemMain = document.querySelectorAll(".item__main>p");
	for (var i = 0; i < pItemMain.length; i++) {
		if (pItemMain[i].classList.contains("p-dark")) {
			pItemMain[i].classList.remove("p-dark");
		} else {
			pItemMain[i].classList.add("p-dark");
		}
	}
	//đổi màu a item__footer
	var aItemFooter = document.querySelectorAll(".item__footer>a");
	for (var i = 0; i < aItemFooter.length; i++) {
		if (aItemFooter[i].classList.contains("a-dark")) {
			aItemFooter[i].classList.remove("a-dark");
		} else {
			aItemFooter[i].classList.add("a-dark");
		}
	}
	var aFooterInfo = document.querySelectorAll(".footer__info>a");
	for (var i = 0; i < aFooterInfo.length; i++) {
		if (aFooterInfo[i].classList.contains("a-dark")) {
			aFooterInfo[i].classList.remove("a-dark");
		} else {
			aFooterInfo[i].classList.add("a-dark");
		}
	}
	//đổi màu sidebar__item
	var bgSidebar = document.querySelectorAll(".sidebar__item");
	for (var i = 0; i < bgSidebar.length; i++) {
		if (bgSidebar[i].classList.contains("sidebar__item-dark")) {
			bgSidebar[i].classList.remove("sidebar__item-dark");
		} else {
			bgSidebar[i].classList.add("sidebar__item-dark");
		}
	}
	//đổi màu sidebar__title
	var sidebarTitleDark = document.querySelectorAll(".sidebar__title");
	for (var i = 0; i < sidebarTitleDark.length; i++) {
		if (sidebarTitleDark[i].classList.contains("sidebar__title-dark")) {
			sidebarTitleDark[i].classList.remove("sidebar__title-dark");
		} else {
			sidebarTitleDark[i].classList.add("sidebar__title-dark");
		}
	}
	//đổi màu recipes__text
	var recipesTextDark = document.querySelectorAll(".recipes__text");
	for (var i = 0; i < recipesTextDark.length; i++) {
		if (recipesTextDark[i].classList.contains("recipes__text-dark")) {
			recipesTextDark[i].classList.remove("recipes__text-dark");
		} else {
			recipesTextDark[i].classList.add("recipes__text-dark");
		}
	}
	//đổi màu posts__content a
	var aPostsContentDark = document.querySelectorAll(".posts__content>a");
	for (var i = 0; i < aPostsContentDark.length; i++) {
		if (aPostsContentDark[i].classList.contains("a-dark")) {
			aPostsContentDark[i].classList.remove("a-dark");
		} else {
			aPostsContentDark[i].classList.add("a-dark");
		}
	}
	//đổi màu posts__content p
	var pPostsContentDark = document.querySelectorAll(".posts__content>p");
	for (var i = 0; i < pPostsContentDark.length; i++) {
		if (pPostsContentDark[i].classList.contains("p-dark")) {
			pPostsContentDark[i].classList.remove("p-dark");
		} else {
			pPostsContentDark[i].classList.add("p-dark");
		}
	}
	//đổi màu a category__item
	var aCategoryItem = document.querySelectorAll(".category__item>a");
	for (var i = 0; i < aCategoryItem.length; i++) {
		if (aCategoryItem[i].classList.contains("p-dark")) {
			aCategoryItem[i].classList.remove("p-dark");
		} else {
			aCategoryItem[i].classList.add("p-dark");
		}
	}
	//đổi màu number pagination
	var number = document.querySelectorAll(".number.normal");
	for (var i = 0; i < number.length; i++) {
		if (number[i].classList.contains("number-dark")) {
			number[i].classList.remove("number-dark");
		} else {
			number[i].classList.add("number-dark");
		}
	}
	//đổi màu next pagination
	var next = document.querySelectorAll(".next");
	for (var i = 0; i < next.length; i++) {
		if (next[i].classList.contains("number-dark")) {
			next[i].classList.remove("number-dark");
		} else {
			next[i].classList.add("number-dark");
		}
	}
	//đổi màu body;
	var bgBodyDark = document.querySelector("body");
	if (navbarIcon.className == "fa-solid fa-moon") {
		bgBodyDark.style.backgroundColor = "#21201e";
	} else {
		bgBodyDark.style.backgroundColor = "white";
	}
	// Banner Section
	var bannerSubsite = document.querySelector(".banner-subsite");
	if (bannerSubsite.className == "banner-subsite") {
		bannerSubsite.classList.toggle("banner-subsite-darkmodee");
	} else {
		bannerSubsite.classList.remove("banner-subsite-darkmodee");
	}
}
