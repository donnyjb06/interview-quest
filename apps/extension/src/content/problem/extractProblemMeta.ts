import { SELECTORS } from "../../lib/constants.ts";
import { extractProblemHeading } from "./extractProblemHeading.ts";
import { extractProblemNumber } from "./parseProblemNumber.ts";
import { extractProblemTitle } from "./parseProblemTitle.ts";

export const extractProblemMeta = (): {
  number: string;
  title: string;
} | null => {
  const headingElement = document.querySelector(SELECTORS.heading);
  if (!headingElement) return null;

  const heading = extractProblemHeading(headingElement);

  if (!heading) return null;

  const number = extractProblemNumber(heading);
  const title = extractProblemTitle(heading);

  if (!number || !title) return null;
  return { number, title };
};
