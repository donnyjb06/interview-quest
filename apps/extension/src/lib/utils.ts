import type { HeadLinkConfig } from "./types";

function ensureHeadLink({ href, rel, crossOrigin }: HeadLinkConfig) {
  const existing = document.head.querySelector<HTMLLinkElement>(
    `link[rel="${rel}"][href="${href}"]`,
  );

  if (existing) {
    return existing;
  }

  const link = document.createElement("link");
  link.rel = rel;
  link.href = href;

  if (crossOrigin) {
    link.crossOrigin = crossOrigin;
  }

  document.head.appendChild(link);
  return link;
}

const formatTimer = (
  totalSeconds: number,
  type: "horizontal" | "vertical",
): string | { minutes: number; seconds: number } => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return type === "horizontal"
    ? `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
    : { minutes, seconds };
};

export { ensureHeadLink, formatTimer };
