gsap.registerPlugin(ScrollSmoother);

export const initScrollSmoother = () => {
  ScrollSmoother.create({
    smooth: 1.5,
    smoothTouch: 0.1,
    effects: true,
  });
};
