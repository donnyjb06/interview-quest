import { extractTextFromNode } from "../extractTextFromNode";
import { getIntroParagraphs } from "./getIntroParagraphs";

export const extractProblemDescription = (
  detailsContainer: Element,
): string | null => {
  const descriptionElements = getIntroParagraphs(detailsContainer);

  const description = descriptionElements
    .map((element) => extractTextFromNode(element).trim())
    .join(" ");

  return description || null;
};
