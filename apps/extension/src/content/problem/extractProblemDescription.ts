import { extractTextFromNode } from "../extractTextFromNode";
import { getIntroParagraphs } from "./getIntroParagraphs";

export const extractProblemDescription = (
  detailsContainer: Element,
): string | null => {
  const descriptionElements = getIntroParagraphs(detailsContainer);

  const description = descriptionElements
    .map((element) => extractTextFromNode(element).trim())
    .join(" ")
    .replace(/\u00A0/g, " ")
    .replace(/\s+/g, " ")
    .replace(/\s+([.,!:;?])/, "$1")
    .trim();

  return description || null;
};
