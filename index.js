var myNav;
var bottomTextBox;
window.onload = function () {
  this.removeVideoInSafari();
  myNav = document.getElementById("nav");
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

  this.bottomTextBox = document.getElementById("bottomText");

  document.getElementById("bottomTextButton").onclick = this.closeButton;
};

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
    var video = document.getElementById("#smokeVideo");
    video.remove;
  }
}

function closeButton() {
  bottomTextBox.remove("displayInlineBlock");
}
