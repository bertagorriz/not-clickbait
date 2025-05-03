import { initScrollSmoother } from "./utils/scrollSmoother.js";

import "../components/intro/intro.js";
import "../components/hero/hero.js";
import "../components/definition/definition.js";

document.addEventListener("DOMContentLoaded", () => {
  initScrollSmoother();
  console.log("Content initialized");
});

gsap.config({
  trialWarn: false,
});
