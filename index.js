var myNav;
var bottomTextBox;

window.onscroll = function () {
  "use strict";
  if (
    document.body.scrollTop >= 50 ||
    document.documentElement.scrollTop >= 50
  ) {
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
  AOS.init();
  removeVideoInSafari();

  bottomTextBox.onclick = this.closeButton;

  document.getElementById("btnApie").onclick = function () {
    scroll(".apie-container");
  };
  document.getElementById("logoBtn").onclick = function () {
    scroll(".pagrindinis-container");
  };

  document.getElementById("arrowPagrindinis").onclick = function () {
    scroll(".apie-container");
  };

  document.getElementById("arrowApie").onclick = function () {
    scroll(".pradekime-container");
  };

  document.getElementById("bottomTextButton").onclick = this.closeButton;

  $(".carousel").slick({
    slidesToShow: 1,
    dots: true,
    centerMode: true,
  });
});

function closeButton() {
  bottomTextBox.remove("displayInlineBlock");
}
