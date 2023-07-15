const mode = document.querySelector(".toggler");
const lightDark = document.querySelector(".lightDark");
const menu = document.querySelector(".menu");
const activeMode = document.querySelector(".name");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const navbar = document.querySelector(".navbar");
const main = document.querySelector(".container");

const nightMode = function () {
  mode.style.left = "calc(70px - 32px)";
  lightDark.src = "assets/moon_icon.svg";
  activeMode.textContent = "dark mode";
  menu.style.background = "#C12029";
  mode.style.background = "#C12029";
  navbar.style.background = "#C12029";
  main.style.background = "#141414";
};

hamburger.addEventListener("click", function () {
  menu.style.left = "0";
  menu.style.opacity = "100";
});

close.addEventListener("click", function () {
  menu.style.left = "-50%";
  menu.style.opacity = "0";
});

mode.addEventListener("click", nightMode);
