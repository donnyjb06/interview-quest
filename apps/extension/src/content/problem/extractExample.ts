import type { Example } from "../../lib/types";

export const extractExample = (
  exampleElement: HTMLPreElement,
): Example | null => {
  const exampleChildNodes = exampleElement.childNodes;
  const example: Example = {
    input: "",
    output: "",
    explanation: null,
  };

  for (const node of exampleChildNodes) {
    const label = node.textContent?.trim();

    if (label === "Input:") {
      example.input = node.nextSibling?.textContent?.trim() ?? "";
    }

    if (label === "Output:") {
      example.output = node.nextSibling?.textContent?.trim() ?? "";
    }

    if (label === "Explanation:") {
      example.explanation = node.nextSibling?.textContent?.trim() ?? null;
    }
  }

  if (!example.input || !example.output) return null;

  return example;
};
