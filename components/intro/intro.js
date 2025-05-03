import { animateSubtitle } from "../hero/hero.js";

const intro = document.querySelector(".intro");
const button = intro.querySelector("button");

const disableScroll = () => {
  document.body.classList.add("no-scroll");
};

const enableScroll = () => {
  document.body.classList.remove("no-scroll");
};

const animateIntro = () => {
  gsap.to(intro, {
    x: "-100%",
    duration: 1.5,
    ease: "power2.inOut",
    onComplete: () => {
      intro.style.display = "none";
      enableScroll();
      animateSubtitle();
    },
  });
};

disableScroll();

button.addEventListener("click", () => {
  animateIntro();
});
