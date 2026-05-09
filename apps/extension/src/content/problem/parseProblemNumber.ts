export const parseProblemNumber = (headingText: string) => {
  const match = headingText.match(/^(\d+)\./);

  return match ? match[1] : null;
};
