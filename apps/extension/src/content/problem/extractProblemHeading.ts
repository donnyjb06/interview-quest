import { SELECTORS } from "../../lib/constants";

export const extractProblemHeading = (): string | null => {
  const titleLink = document.querySelector(SELECTORS.title);
  const title = titleLink?.textContent.trim();
  return title ?? null;
};
