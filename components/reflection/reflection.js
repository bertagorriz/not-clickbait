gsap.registerPlugin(ScrollTrigger, SplitText);

const reflectionText = document.querySelector(".reflection_text");

const split = new SplitText(reflectionText.querySelectorAll("p"), {
  type: "chars,words",
  charsClass: "char",
});

gsap.from(split.chars, {
  scrollTrigger: {
    trigger: reflectionText,
    start: "top bottom",
    toggleActions: "play reverse play reverse",
  },
  duration: 0.05,
  opacity: 0,
  stagger: 0.05,
  ease: "power1.out",
});
