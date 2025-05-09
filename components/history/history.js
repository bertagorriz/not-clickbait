import debounce from "../../js/utils/debounce.js";

gsap.registerPlugin(ScrollTrigger);

const historyArticle = document.querySelector(".history");
const itemsWrapper = document.querySelector(".history_clickbaits");
const items = document.querySelectorAll(".history_item");
const totalItems = items.length - 1;

let lateralPadding = 16;

const positionItems = () => {
  items.forEach((item, index) => {
    const x = (index / totalItems) * 60;
    item.style.left = `calc(${x}% )`;

    const base = Math.random() * 5;
    const rotate = index % 2 === 0 ? base : -base;
    item.style.transform = `rotate(${rotate}deg)`;
  });
};

const getScrollMaxWidth = () => {
  const lastItem = items[items.length - 1];
  const lastItemEnd = lastItem.offsetLeft + lastItem.offsetWidth;
  const containerWidth = historyArticle.offsetWidth;

  return lastItemEnd - containerWidth + lateralPadding;
};

const animateWrapper = () => {
  const maxWidth = getScrollMaxWidth();

  if (isNaN(maxWidth) || Math.abs(maxWidth) > 10000) return;

  ScrollTrigger.getById("historyWrapperScroll")?.kill();

  gsap.to(itemsWrapper, {
    x: -maxWidth,
    ease: "none",
    scrollTrigger: {
      id: "historyWrapperScroll",
      trigger: items[0],
      start: "top top",
      endTrigger: ".history",
      end: "bottom bottom",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
};

const animateItems = () => {
  items.forEach((item) => {
    gsap.to(item, {
      opacity: 1,
      scale: 1,
      ease: "power1.out",
      duration: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  });
};

const refreshHistoryWrapper = () => {
  lateralPadding = 32;
  positionItems();
  animateWrapper();
  ScrollTrigger.refresh();
};

const initHistorySection = () => {
  positionItems();
  animateWrapper();
  ScrollTrigger.refresh();
  animateItems();
};

requestAnimationFrame(initHistorySection);

window.addEventListener("resize", debounce(refreshHistoryWrapper, 300));
