gsap.registerPlugin(ScrollSmoother);

export const getScrollSmoother = () => {
  ScrollSmoother.create({
    smooth: 1.5,
    smoothTouch: 0.1,
    effects: true,
  });
};
