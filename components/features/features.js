gsap.registerPlugin(ScrollTrigger);

const features = document.querySelector(".features");
const featuresHorizontal = features.querySelector(".features-horizontal");

const getRelativeOffsetLeft = (child, parent) => {
  const childRect = child.getBoundingClientRect();
  const parentRect = parent.getBoundingClientRect();
  return childRect.left - parentRect.left;
};

const xPosition = () => {
  const offset = getRelativeOffsetLeft(featuresHorizontal, features);
  const visibleWidth = features.offsetWidth - offset;
  return -(featuresHorizontal.scrollWidth - visibleWidth);
};

const endTrigger = () => {
  const offset = getRelativeOffsetLeft(featuresHorizontal, features);
  const visibleWidth = features.offsetWidth - offset;
  return "+=" + (featuresHorizontal.scrollWidth - visibleWidth);
};

gsap.to(featuresHorizontal, {
  x: xPosition,
  ease: "none",
  scrollTrigger: {
    trigger: features,
    start: "top top",
    end: endTrigger,
    scrub: true,
    pin: true,
    anticipatePin: 1,
    invalidateOnRefresh: true,
  },
});
