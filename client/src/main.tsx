import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { MotionConfig } from "framer-motion";

// Add head metadata
document.title = "JumpHi - Basketball Training App";
const metaDescription = document.createElement("meta");
metaDescription.name = "description";
metaDescription.content = "Elevate your basketball game with JumpHi - the ultimate basketball training app for players of all levels";
document.head.appendChild(metaDescription);

// Add favicon
const favicon = document.createElement("link");
favicon.rel = "icon";
favicon.href = "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏀</text></svg>";
document.head.appendChild(favicon);

// Add Google Fonts
const fontPreconnect1 = document.createElement("link");
fontPreconnect1.rel = "preconnect";
fontPreconnect1.href = "https://fonts.googleapis.com";
document.head.appendChild(fontPreconnect1);

const fontPreconnect2 = document.createElement("link");
fontPreconnect2.rel = "preconnect";
fontPreconnect2.href = "https://fonts.gstatic.com";
fontPreconnect2.crossOrigin = "anonymous";
document.head.appendChild(fontPreconnect2);

const fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href = "https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Roboto:wght@300;400;500;700&display=swap";
document.head.appendChild(fontLink);

createRoot(document.getElementById("root")!).render(
  <MotionConfig reducedMotion="user">
    <App />
  </MotionConfig>
);
