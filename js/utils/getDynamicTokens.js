const getWindowSize = () => {
  const width = window.innerWidth;
  if (width < 768) return "mobile";
  if (width >= 768 && width <= 1023) return "tablet";
  return "desktop";
};

const getTokenFile = (size) => {
  switch (size) {
    case "mobile":
      return "styles/tokens/mobile.css";
    case "tablet":
      return "styles/tokens/tablet.css";
    case "desktop":
      return "styles/tokens/desktop.css";
    default:
      return "styles/tokens/desktop.css";
  }
};

const getTokensLink = (currentSize) => {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = getTokenFile(currentSize);
  link.setAttribute("data-tokens", "true");

  document.head.appendChild(link);
  return link;
};

export const getDynamicTokens = () => {
  let currentSize = getWindowSize();
  let tokensLink = getTokensLink(currentSize);

  window.addEventListener("resize", () => {
    const newSize = getWindowSize();
    if (newSize !== currentSize) {
      currentSize = newSize;
      tokensLink.href = getTokenFile(currentSize);
    }
  });
};
