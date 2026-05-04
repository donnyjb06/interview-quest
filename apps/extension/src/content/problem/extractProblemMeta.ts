import { extractProblemHeadingText } from "./extractProblemHeading.ts";
import { extractProblemNumber } from "./parseProblemNumber.ts";
import { extractProblemTitle } from "./parseProblemTitle.ts";

export const extractProblemMeta = () => {
  const heading = extractProblemHeadingText();

  if (!heading) return null;

  const number = extractProblemNumber(heading);
  const title = extractProblemTitle(heading);

  if (!number || !title) return null;
  return { number, title };
};
