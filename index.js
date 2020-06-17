var myNav;
var bottomTextBox;

window.onscroll = function () {
  "use strict";
  if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
    myNav.classList.add("scroll");
    bottomTextBox.classList.add("displayInlineBlock");
  } else {
    myNav.classList.remove("scroll");
  }
};

function scroll(scrollTo) {
  $("html,body").animate(
    {
      scrollTop: $(scrollTo).offset().top,
    },
    "slow"
  );
}

function closeButton() {
  bottomTextBox.remove("displayInlineBlock");
}

function removeVideoInSafari() {
  var ua = navigator.userAgent.toLowerCase();
  var is_safari = ua.indexOf("safari/") > -1 && ua.indexOf("chrome") < 0;
  if (is_safari) {
    var video = document.getElementById("smokeVideo");
    video.remove();
  }
}

$(document).ready(function () {
  bottomTextBox = document.getElementById("bottomTextButton");
  myNav = $("#nav")[0];
  bottomTextBox = $("#bottomText")[0];
  AOS.init();
  removeVideoInSafari();

  bottomTextBox.onclick = this.closeButton;

  document.getElementById("logoBtn").onclick = function () {
    scroll(".pagrindinis-container");
  };

  document.getElementById("arrowPagrindinis").onclick = function () {
    scroll(".apie-container");
  };

  document.getElementById("arrowApie").onclick = function () {
    scroll(".pradekime-container");
  };
  showSlides(slideIndex);
});

var slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
