function darkmode(){
    var bgFeatureDark = document.querySelector(".feature");
    var navbarIcon = document.querySelector("#darkLight");
    //đổi màu body feature
	if (navbarIcon.className == "fa-solid fa-moon") {
		navbarIcon.className = "fa-solid fa-sun";
		bgFeatureDark.style.backgroundColor = "#232220";
	} else {
		navbarIcon.className = "fa-solid fa-moon";
		bgFeatureDark.style.backgroundColor = "white";
	}
    //đổi màu title
    var title = document.querySelectorAll(".title");
	for (var i = 0; i < title.length; i++) {
		if(title[i].classList.contains('title-dark')){
            title[i].classList.remove("title-dark")
        }else{
            title[i].classList.add("title-dark")
        }
	}
    //đổi màu p
    var p = document.querySelectorAll("p");
	for (var i = 0; i < p.length; i++) {
		if(p[i].classList.contains('p-dark')){
            p[i].classList.remove("p-dark")
        }else{
            p[i].classList.add("p-dark")
        }
	}
    //đổi màu body skill
    var bgSkillDark = document.querySelector(".skills");
	if (navbarIcon.className == "fa-solid fa-moon") {
		bgSkillDark.style.backgroundColor = "#f7f7f7";
	} else {
		bgSkillDark.style.backgroundColor = "#282828";
	}
    //đổi màu progress-tile
    var progressTitleDark = document.querySelectorAll(".progress-title");
	for (var i = 0; i < progressTitleDark.length; i++) {
		if(progressTitleDark[i].classList.contains('progress-title-dark')){
            progressTitleDark[i].classList.remove("progress-title-dark")
        }else{
            progressTitleDark[i].classList.add("progress-title-dark")
        }
	}
    //đổi màu progress-bar
    var progressBarDark = document.querySelectorAll(".progress-bar");
    console.log(progressBarDark)
	for (var i = 0; i < progressBarDark.length; i++) {
		if(progressBarDark[i].classList.contains('progress-bar-dark')){
            progressBarDark[i].classList.remove("progress-bar-dark")
        }else{
            progressBarDark[i].classList.add("progress-bar-dark")
        }
	}
    //đổi màu body team
    var bgTeamDark = document.querySelector(".team");
	if (navbarIcon.className == "fa-solid fa-moon") {
		bgTeamDark.style.backgroundColor = "#f7f7f7";
	} else {
		bgTeamDark.style.backgroundColor = "#232220";
	}
    //đổi màu item-title
    var itemTitleDark = document.querySelectorAll(".item-title");
	for (var i = 0; i < itemTitleDark.length; i++) {
		if(progressTitleDark[i].classList.contains('item-title-dark')){
            itemTitleDark[i].classList.remove("item-title-dark")
        }else{
            itemTitleDark[i].classList.add("item-title-dark")
        }
	}
     // Banner Section
    var bannerSubsite = document.querySelector(".banner-subsite");  
    if (bannerSubsite.className == "banner-subsite") {
      bannerSubsite.classList.toggle("banner-subsite-darkmodee");
    } else {
      bannerSubsite.classList.remove("banner-subsite-darkmodee");
    }
}