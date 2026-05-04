import type { Example } from "../../lib/types";
import { extractExample } from "./extractExample";

export const extractExamples = (container: Element): Example[] => {
  const exampleElements: HTMLPreElement[] = Array.from(
    container.querySelectorAll("pre"),
  );

  return exampleElements.map(extractExample);
};
