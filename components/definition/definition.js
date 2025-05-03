gsap.registerPlugin(ScrollTrigger);

const contentContainer = document.querySelector(".definition_content");
const content = contentContainer.querySelectorAll("*");

gsap.from(content, {
  opacity: 0,
  y: 40,
  duration: 0.6,
  stagger: 0.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: contentContainer,
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});
