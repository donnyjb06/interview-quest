import { extractTextFromNode } from "./extractTextFromNode";
import { getIntroParagraphs } from "./getIntroParagraphs";

export const extractProblemDescription = (
  detailsContainer: Element,
): string => {
  const descriptionElements = getIntroParagraphs(detailsContainer);

  const description = descriptionElements
    .map((element) => extractTextFromNode(element))
    .join(" ");

  return description;
};
