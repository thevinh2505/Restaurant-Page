// Countting up
$(".counter-num").countUp();

// Magnific Popup
$(document).ready(function () {
  $(".videoplay").magnificPopup({
    type: "iframe",
    iframe: {
      markup:
        '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
        "</div>",

      patterns: {
        youtube: {
          index: "youtube.com/",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1", //
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "https://player.vimeo.com/video/%id%?autoplay=1",
        },
        gmaps: {
          index: "//maps.google.",
          src: "%id%&output=embed",
        },
      },

      srcAction: "iframe_src",
    },
  });
});

// OwlCarousel
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 1,
    },
    768: {
      items: 1,
    },
    992: {
      items: 1,
    },
    1200: {
      items: 1,
    },
  },
});

// Show/hide menu
function showMenu() {
  var test = document.querySelector(".menu__overlay");
  if ((test.style.display = "none")) {
    test.style.display = "block";
  }
}

function closeMenu() {
  var test = document.querySelector(".menu__overlay");
  if ((test.style.display = "block")) {
    test.style.display = "none";
  }
}

// BackToTop 
var backToTop = document.getElementById("back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.documentElement.scrollTop > 100) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

