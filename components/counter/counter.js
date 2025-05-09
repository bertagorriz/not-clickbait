import debounce from "../../js/utils/debounce.js";
gsap.registerPlugin(ScrollTrigger);

const counter = document.querySelector(".counter");
const counterContent = counter.querySelector(".counter_content");
const counterNumbers = counterContent.querySelectorAll("span");
const counterPercentage = counter.querySelector(".counter_percentage");

const fadeBox = counter.querySelector(".fade_box");
const fadePercentage = fadeBox.querySelector(".fade_text");

const otherSpans = counter.querySelectorAll(
  ".counter_paragraph span:not(.counter_percentage), .counter_text p, .counter_number"
);

const percent = { value: 0 };
const targetValue = 27501783;

const updateTextContent = () => {
  const value = Math.round(percent.value);
  const valueToString = value.toLocaleString();

  counterNumbers.forEach((number, index) => {
    number.textContent = value === 0 ? "" : valueToString[index] || "";
  });
};

const startIncrement = () => {
  gsap.to(percent, {
    value: percent.value + 1,
    duration: 1,
    ease: "power1.inOut",
    onUpdate: updateTextContent,
  });
};

const animateCounter = gsap.to(percent, {
  value: targetValue,
  duration: 4,
  ease: "power2.out",
  onUpdate: updateTextContent,
  onComplete: () => {
    setInterval(startIncrement, 1500);
  },
  scrollTrigger: {
    trigger: counterContent,
    start: "top 80%",
    once: true,
    onEnter: () => animateCounter.play(),
  },
});

const percentageTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: counter,
    start: "bottom bottom",
    end: "bottom top",
    pin: true,
    scrub: true,
  },
});

percentageTimeline
  .to(counterPercentage, {
    scale: 500,
    duration: 1,
    ease: "power1.inOut",
  })
  .to(
    otherSpans,
    {
      opacity: 0,
      duration: 0.3,
      ease: "power1.inOut",
    },
    "<"
  )
  .to(
    fadeBox,
    {
      scaleX: 1,
      opacity: 1,
      duration: 0.5,
      ease: "none",
    },
    "-=1"
  )
  .to(
    fadePercentage,
    { opacity: 1, scale: 1, duration: 0.5, ease: "power2.inOut" },
    "-=0.5"
  );

window.addEventListener(
  "load",
  debounce(() => {
    ScrollTrigger.refresh();
  }, 300)
);
