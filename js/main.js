import { animate, scroll, stagger, inView } from "https://cdn.skypack.dev/motion";
/* global consts */
const topSection = document.querySelector("#home_sec");
const buttonProject1 = document.querySelector(".viewP1");
const buttonProject2 = document.querySelector(".viewP2");
const buttonProject3 = document.querySelector(".viewP3");
const buttonProject4 = document.querySelector(".viewP4");
const buttonProject5 = document.querySelector(".viewP5");
const buttonAbout = document.querySelector(".view_about");
const body = document.querySelector("body");
const overlay = document.querySelector("#overlay");
const popContainer = document.querySelector("#popup_about, .popup_container");
const popAbout = document.querySelector("#popup_about");
const sliderContact = document.querySelector("#contact_slider");
const closeBtn = document.querySelectorAll(".exit");
const popParagraph = document.querySelector(".popup_container p");
const popImg = document.querySelector(".popup_container img");
const popLink = document.querySelector(".popup_container a");
window.addEventListener("DOMContentLoaded", init);
function init() {
  buttons();
  closePop();
  AnimateUp();
  document.querySelector("h1").classList.add("typing");
}

function buttons() {
  document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      let scrollDistance = document.documentElement.clientHeight;
      if (btn.className.split(" ").includes("bottom_chev")) {
        scrollDistance *= -1;
      } else {
      }
      window.scrollBy(0, scrollDistance);
    });
  });
}
function AnimateUp() {
  inView([topSection], ({ target }) => {
    animate(target.querySelector("h2"), { x: ["200%", "0%"] }, { duration: 0.8 }, { easing: "ease-out" });
    animate(target.querySelector("p"), { x: ["-150%", "0%"] }, { duration: 0.8 }, { easing: "ease-out" });
  });
}
window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  let screenY = scrolled;
  if (screenY < 10) {
    document.querySelector("h1").classList.add("typing");
    document.querySelector("h1").style.opacity = "1";
    document.querySelector(".sec_1").style.backgroundColor = "var(--accent-clr-red)";
    document.querySelector(".sec_2").style.backgroundColor = "transparent";
    document.querySelector(".sec_3").style.backgroundColor = "transparent";
  }
  if (screenY > 600) {
    AnimateUp();
    document.querySelector("h1").classList.remove("typing");
    document.querySelector("h1").style.opacity = "0";
    document.querySelector(".sec_1").style.backgroundColor = "transparent";
    document.querySelector(".sec_3").style.backgroundColor = "transparent";
    document.querySelector(".sec_2").style.backgroundColor = "var(--accent-clr-red)";
  }
  if (screenY > 1100) {
    document.querySelector(".sec_1").style.backgroundColor = "transparent";
    document.querySelector(".sec_2").style.backgroundColor = "transparent";
    document.querySelector(".sec_3").style.backgroundColor = "var(--accent-clr-red)";
  }
});
document.addEventListener("keydown", function (event) {
  event.preventDefault();
  let scrollDistance = document.documentElement.clientHeight;
  const key = event.key;
  switch (key) {
    case "ArrowUp":
      scrollDistance *= -1;
      window.scrollBy(0, scrollDistance);
      document.querySelector(".bottom_chev").classList.add("myCustomActive");
      break;
    case "ArrowDown":
      scrollDistance *= 1;
      window.scrollBy(0, scrollDistance);
  }
});
const sliders = document.querySelectorAll("[data-carousel-button]");
sliders.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button.closest("[data-carousel]").querySelector("[data-slides]");
    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;
    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});
document.querySelector(".contact").addEventListener("click", () => {
  sliderContact.style.right = "0%";
});
document.querySelector(".bi-arrow-right-square").addEventListener("click", () => {
  sliderContact.style.right = "-200%";
});
buttonProject1.addEventListener("click", () => {
  popParagraph.innerHTML =
    "The purpose of this project is to recreate an existence website and creating a more user-friendly, responsive and dynamic website. <br> Technologies that have been used are WordPress as database, HTML / CSS as content and styling, JavaScript as a fetching method for the data.";
  popImg.src = "./media/images/colors_and_anim_web.png";
  popLink.href = "https://abdulhamidsa.github.io/SILFEN-PROJECT/";
  popContainer.scrollTo(0, 0);
  addOverlay();
});
buttonProject2.addEventListener("click", () => {
  popParagraph.innerHTML =
    "In this assignment our goal is to create an XD prototype, starting with a low-fidelity XD prototype and to end up with a high-fidelity one. It is a long process where it develops our individual skills in understanding the user experience, and both finding user flows and coming up with a solution for them.";
  popImg.src = "./media/images/responsive_web.png";
  popLink.href = "https://xd.adobe.com/view/0fe2fd8f-6a06-4077-93d3-bffea9a6e7d7-5ab1/?fullscreen&hints=off";
  addOverlay();
});
buttonProject3.addEventListener("click", () => {
  popParagraph.innerHTML =
    "In this project the focus was on javaScript. Fetching data from the database and clean it by creating a new prototype (object). The goal was to work as much as possible with functions and passing them as parameters as well. <br> This project only focuses on the functionality of the website, rather than the design and all UX - UI related.";
  popImg.src = "./media/images/fonts_and_ui.png";
  popLink.href = "https://abdulhamidsa.github.io/HogwartHackedList/hogwart_project.html";
  addOverlay();
});
buttonProject4.addEventListener("click", () => {
  popParagraph.innerHTML =
    "First semester work. This project is a game that depends heavily on javaScript, and was the first time I worked with the language. The goal was to control the visual aspect of the game and make it interactive when the player press on something, toggling classes on and off was the biggest method to run the game.";
  popImg.src = "./media/images/game_js.png";
  popLink.href = "https://designslayer.dk/theme3/catchMeOutSide/index.html";
  addOverlay();
});
buttonProject5.addEventListener("click", () => {
  popParagraph.innerHTML = "The goal in this project is to create a responsive solutions for all devices while also working with colour's hierarchy and fonts ";
  popImg.src = "./media/images/responsive.png";
  popLink.href = "https://designslayer.dk/responsive-design/index.html";
  addOverlay();
});
buttonAbout.addEventListener("click", addOverlay);
function addOverlay() {
  body.style.overflow = "hidden";
  overlay.style.visibility = "visible";
  overlay.style.opacity = "1";
  popContainer.style.visibility = "visible";
  popContainer.style.opacity = "1";
  popContainer.style.height = "55vh";
  popAbout.style.visibility = "visible";
  popAbout.style.opacity = "1";
  popAbout.style.height = "70vh";
  popContainer.scrollTo(0, 0);
  popAbout.scrollTo(0, 0);
}
closeBtn.forEach((x) => {
  x.addEventListener("click", closePop);
});
function closePop() {
  body.style.overflow = "auto";
  overlay.style.visibility = "hidden";
  overlay.style.opacity = "0";
  popContainer.style.visibility = "hidden";
  popContainer.style.opacity = "0";
  popContainer.style.height = "0vh";
  popAbout.style.visibility = "hidden";
  popAbout.style.opacity = "0";
  popAbout.style.height = "0vh";
}
