const subtitles = [
  "desmonta trampas",
  "cuestiona los clicks",
  "desafía tu atención",
  "hackea el engaño",
  "alerta tus sentidos",
];

const subtitle = document.querySelector(".hero_subtitle");
subtitle.textContent = subtitles[0];

let index = 1;

export const animateSubtitle = () => {
  const tl = gsap.timeline({ repeat: -1 });

  tl.to(subtitle, {
    opacity: 0,
    duration: 0.5,
    delay: 2.5,
    onComplete: () => {
      subtitle.textContent = subtitles[index];
      index = (index + 1) % subtitles.length;
    },
  }).to(subtitle, {
    opacity: 1,
    duration: 0.5,
  });
};
