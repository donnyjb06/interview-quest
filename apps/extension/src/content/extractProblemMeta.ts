import { extractProblemHeadingText } from "./extractProblemHeadingText.ts";
import { extractProblemNumber } from "./extractProblemNumber";
import { extractProblemTitle } from "./extractProblemTitle";

export const extractProblemMeta = () => {
  const heading = extractProblemHeadingText();

  if (!heading) return null;

  const number = extractProblemNumber(heading);
  const title = extractProblemTitle(heading);

  if (!number || !title) return null;
  return { number, title };
};
