// DARK MODE
function darkmode() {
    var bgBodyDark = document.getElementsByTagName("body")[0];
    var navBarIcon = document.querySelector("#darkLight");
  
    // Đổi icon
    if (navBarIcon.className == "fa-solid fa-moon") {
      navBarIcon.className = "fa-solid fa-sun";
      bgBodyDark.style.backgroundColor = "#232220";
    } else {
      navBarIcon.className = "fa-solid fa-moon";
      bgBodyDark.style.backgroundColor = "white";
    }
  
    // 404 
    var bannerSubsite = document.querySelector(".banner-subsite");
    var pageNotFound = document.querySelector(".pagenotfound");
  
    // Banner Section
    if (bannerSubsite.className == "banner-subsite") {
      bannerSubsite.classList.toggle("banner-subsite-darkmodee");
    } else {
      bannerSubsite.classList.remove("banner-subsite-darkmodee");
    }
  
    // pageNotFound section
    if (pageNotFound.className == "pagenotfound") {
      pageNotFound.classList.toggle("pagenotfound-darkmode");
    } else {
      pageNotFound.classList.remove("pagenotfound-darkmode");
    }
  }
  