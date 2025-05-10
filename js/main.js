import { getScrollSmoother } from "./utils/getScrollSmoother.js";
import { getDynamicTokens } from "./utils/getDynamicTokens.js";

import "../components/intro/intro.js";
import "../components/hero/hero.js";
import "../components/definition/definition.js";
import "../components/history/history.js";
import "../components/counter/counter.js";
import "../components/features/features.js";
import "../components/actions/actions.js";
import "../components/reflection/reflection.js";

document.addEventListener("DOMContentLoaded", () => {
  getScrollSmoother();
  getDynamicTokens();
  console.log("Content initialized");
});

gsap.config({
  trialWarn: false,
});
