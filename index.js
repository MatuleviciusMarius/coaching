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

  createSlide();
});

function createSlide() {
  var domWidth = window.outerWidth;
  if (domWidth > 480) {
    new Splide(".splide", {
      type: "loop",
      padding: {
        right: "20%",
        left: "20%",
      },
      lazyLoad: true,
      drag: true,
      speed: 800,
      lazyLoad: "nearby",
      gap: 0,
      focus: "center",
      height: "50%",
    }).mount();
  } else {
    new Splide(".splide", {
      type: "fade",
      rewind: true,
      lazyLoad: true,
      drag: true,
      autoplay: true,
    }).mount();
  }
}

function closeButton() {
  bottomTextBox.remove("displayInlineBlock");
}

var autoSizeText;

autoSizeText = function () {
  var el, elements, _i, _len, _results;
  elements = $(".resize");
  console.log(elements);
  if (elements.length < 0) {
    return;
  }
  _results = [];
  for (_i = 0, _len = elements.length; _i < _len; _i++) {
    el = elements[_i];
    _results.push(
      (function (el) {
        var resizeText, _results1;
        resizeText = function () {
          var elNewFontSize;
          elNewFontSize =
            parseInt($(el).css("font-size").slice(0, -2)) - 1 + "px";
          return $(el).css("font-size", elNewFontSize);
        };
        _results1 = [];
        while (el.scrollHeight > el.offsetHeight) {
          _results1.push(resizeText());
        }
        return _results1;
      })(el)
    );
  }
  return _results;
};
