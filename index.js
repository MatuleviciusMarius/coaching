var myNav;
window.onload = function () {
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
};

window.onscroll = function () {
  "use strict";
  if (
    document.body.scrollTop >= 50 ||
    document.documentElement.scrollTop >= 50
  ) {
    myNav.classList.add("scroll");
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
