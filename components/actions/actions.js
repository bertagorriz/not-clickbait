gsap.registerPlugin(ScrollTrigger);

const points = document.querySelectorAll(".action-point");

const animatePoints = () => {
  points.forEach((point, index) => {
    gsap.to(point, {
      opacity: 1,
      duration: 0.7,
      delay: index * 0.1,
      scrollTrigger: {
        trigger: point,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  });
};

animatePoints();
