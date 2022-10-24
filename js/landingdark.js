// Darkmode
function darkmode() {
  var bgBodyDark = document.getElementsByTagName("body")[0];
  var navBarIcon = document.querySelector("#darkLight");

  // Home
  var bannerHome = document.querySelector(".banner-home");
  var aboutUsSection = document.querySelector(".aboutUs");
  var bookingSection = document.querySelector(".booking");
  var categoriesSection = document.querySelector(".categories");
  var servicesSection = document.querySelector(".services");
  var statsSection = document.querySelector(".stats");
  var blogSection = document.querySelector(".blog");
  var testimonialsSection = document.querySelector(".testimonials");

  //About
  var ourTeam = document.querySelector(".ourteam");

  //Contact
  var contact = document.querySelector(".contact");

  // Đổi icon
  if (navBarIcon.className == "fa-solid fa-moon") {
    navBarIcon.className = "fa-solid fa-sun";
    bgBodyDark.style.backgroundColor = "#232220";
  } else {
    navBarIcon.className = "fa-solid fa-moon";
    bgBodyDark.style.backgroundColor = "white";
  }

  // Banner home
  if (bannerHome.className == "banner-home") {
    bannerHome.classList.toggle("banner-home-darkmode");
  } else {
    bannerHome.classList.remove("banner-home-darkmode");
  }

  // About Section
  if (aboutUsSection.className == "aboutUs") {
    aboutUsSection.classList.toggle("aboutUs-darkmode");
  } else {
    aboutUsSection.classList.remove("aboutUs-darkmode");
  }

  // Booking Section
  if (bookingSection.className == "booking") {
    bookingSection.classList.toggle("booking-darkmode");
  } else {
    bookingSection.classList.remove("booking-darkmode");
  }

  // Categories Section
  if (categoriesSection.className == "categories") {
    categoriesSection.classList.toggle("categories-darkmode");
  } else {
    categoriesSection.classList.remove("categories-darkmode");
  }

  // Services Section
  if (servicesSection.className == "services") {
    servicesSection.classList.toggle("services-darkmode");
  } else {
    servicesSection.classList.remove("services-darkmode");
  }

  // Stats Section
  if (statsSection.className == "stats") {
    statsSection.classList.toggle("stats-darkmode");
  } else {
    statsSection.classList.remove("stats-darkmode");
  }

  // Blog Section
  if (blogSection.className == "blog") {
    blogSection.classList.toggle("blog-darkmode");
  } else {
    blogSection.classList.remove("blog-darkmode");
  }

  // Testimonials Section
  if (testimonialsSection.className == "testimonials") {
    testimonialsSection.classList.toggle("testimonials-darkmode");
  } else {
    testimonialsSection.classList.remove("testimonials-darkmode");
  }

  // Ourteam
  if (ourTeam.className == "ourteam") {
    ourTeam.classList.toggle("ourteam-darkmode");
  } else {
    ourTeam.classList.remove("ourteam-darkmode");
  }

  // Contact
  if (contact.className == "contact") {
    contact.classList.toggle("contact-darkmode");
  } else {
    contact.classList.remove("contact-darkmode");
  }
}
