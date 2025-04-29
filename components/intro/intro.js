const intro = document.querySelector(".intro");
const button = intro.querySelector("button");

export const animateIntro = () => {
  gsap.to(intro, {
    x: "-100%",
    duration: 1.5,
    ease: "power2.inOut",
    onComplete: () => {
      intro.style.display = "none";
    },
  });
};

button.addEventListener("click", () => {
  animateIntro();
});
