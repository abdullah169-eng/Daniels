// typed-js
var typed = new Typed("#typed", {
  strings: ["Designer", "Larry Daniels", "Developer"],
  loop: true,
  typeSpeed: 40,
  backSpeed: 40,
  backDelay: 1200,
  showCursor: false,
  autoStart: true,
});

// Nav-Scroll
const myNav = document.getElementById("nav-bar");

window.onscroll = function () {
  if (window.scrollY > window.innerHeight) {
    myNav.classList.add("scrolled");
  } else {
    myNav.classList.remove("scrolled");
  }
};
