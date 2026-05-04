export const extractProblemNumber = (headingText: string) => {
  const problemNumber = headingText.split(".")[0];
  return problemNumber ?? null;
};
