import type { Example } from "../../lib/types";
import { extractExample } from "./extractExample";

export const extractExamples = (container: Element): Example[] | null => {
  const exampleElements: HTMLPreElement[] = Array.from(
    container.querySelectorAll("pre"),
  );

  const examples = exampleElements
    .map(extractExample)
    .filter((example) => !!example);
  if (exampleElements.length < 1) return null;

  return examples;
};
