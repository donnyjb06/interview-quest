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

export { ensureHeadLink };
