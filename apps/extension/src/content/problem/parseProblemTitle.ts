export const extractProblemTitle = (headingText: string): string | null => {
  const title = headingText.split(".")[1].trim();
  return title ?? null;
};
