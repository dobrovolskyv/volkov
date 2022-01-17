// const header = document.querySelector(".header"),
//   video = header.querySelector("video"),
//   headerInner = header.querySelector(".header__inner"),
//   headerText = headerInner.querySelector(".header__text"),
//   headerBtn = headerInner.querySelector(".header__btn");

// const controller = new ScrollMagic.Controller();

// let scene = new ScrollMagic.Scene({
//   duration: 11000,
//   triggerElement: header,
//   triggerHook: 0,
// })
//   .setPin(header)
//   .addTo(controller);

// const textAnim = TweenMax.fromTo(headerText, 3, { opacity: 0 }, { opacity: 1 }, "-=5");
// let scene2 = new ScrollMagic.Scene({
//   duration: 10000,
//   triggerElement: header,
//   triggerHook: 0,
// })
//   .setTween(textAnim)
//   .addTo(controller);

// let accelamount = 0.1;
// let pos = 0;
// let delay = 0;

// scene.on("update", (e) => {
//   pos = e.scrollPos / 1000;
// });

// setInterval(() => {
//   delay += (pos - delay) * accelamount;
//   video.currentTime = pos;
//   //  video.currentTime = delay;
// }, 33.3);

//slide section training

const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const sidebar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main__slide");
const container = document.querySelector(".training");

const slideCount = mainSlide.querySelectorAll("div").length;

let slideActiveIndex = 0;

sidebar.style.top = `-${(slideCount - 1) * 100}vh`;

upBtn.addEventListener("click", () => {
  changeSlide("up");
});
downBtn.addEventListener("click", () => {
  changeSlide("down");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    changeSlide("up");
  } else if (e.key === "ArrowDown") {
    changeSlide("down");
  }
});

function changeSlide(direction) {
  if (direction === "up") {
    slideActiveIndex++;
    if (slideActiveIndex === slideCount) {
      slideActiveIndex = 0;
    }
  } else if (direction === "down") {
    slideActiveIndex--;
    if (slideActiveIndex < 0) {
      slideActiveIndex = slideCount - 1;
    }
  }

  const height = container.clientHeight;

  mainSlide.style.transform = `translateY(-${slideActiveIndex * height}px)`;

  sidebar.style.transform = `translateY(${slideActiveIndex * height}px)`;
}

const cards = document.querySelector(".card__price");

cards.addEventListener("click", function () {
  const list = document.querySelector(".price__list");
  list.classList.toggle("hidden");
});

// new cards
