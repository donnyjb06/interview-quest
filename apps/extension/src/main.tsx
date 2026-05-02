import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ensureHeadLink } from "./lib/utils.ts";

ensureHeadLink({
  rel: "preconnect",
  href: "https://fonts.googleapis.com",
});

ensureHeadLink({
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous",
});

ensureHeadLink({
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
});

ensureHeadLink({
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap",
});

const host = document.createElement("div");
host.id = "iq-extension-root";
document.body.appendChild(host);

const shadowRoot = host.attachShadow({ mode: "open" });
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = chrome.runtime.getURL("assets/index.css");
shadowRoot.appendChild(styleLink);
const appRoot = document.createElement("div");
shadowRoot.appendChild(appRoot);

createRoot(appRoot).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
