// Twemoji
// import twemoji from "twemoji";

twemoji.parse(document.body, {
  folder: "svg",
  ext: ".svg",
});

// The following code is based off a toggle menu by @Bradcomp
// https://gist.github.com/Bradcomp/a9ef2ef322a8e8017443b626208999c1
(function () {
  var burger = document.querySelector(".burger");
  var menu = document.querySelector("#" + burger.dataset.target);
  burger.addEventListener("click", () => {
    burger.classList.toggle("is-active");
    menu.classList.toggle("is-active");
  });
})();

function trackScroll() {
  var scrolled = window.pageYOffset;
  var coords = document.documentElement.clientHeight;
  if (scrolled > coords) {
    goTopBtn.classList.add("return-to-top-show");
  }
  if (scrolled < coords) {
    goTopBtn.classList.remove("return-to-top-show");
  }
}

function backToTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -80);
    setTimeout(backToTop, 0);
  }
}

var goTopBtn = document.querySelector(".return-to-top");

if (goTopBtn) {
  window.addEventListener("scroll", trackScroll);
  goTopBtn.addEventListener("click", backToTop);
}
