import { SELECTORS } from "../../lib/constants";

export const extractProblemTopics = (): string[] => {
  const topicsElements = Array.from(document.querySelectorAll(SELECTORS.topic));

  const topics = topicsElements.map((element) => element.textContent);
  return topics;
};
