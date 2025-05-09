import { getScrollSmoother } from "./utils/getScrollSmoother.js";

import "../components/intro/intro.js";
import "../components/hero/hero.js";
import "../components/definition/definition.js";

document.addEventListener("DOMContentLoaded", () => {
  getScrollSmoother();
  console.log("Content initialized");
});

gsap.config({
  trialWarn: false,
});
