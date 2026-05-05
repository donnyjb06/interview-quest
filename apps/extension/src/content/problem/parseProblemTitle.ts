export const parseProblemTitle = (headingText: string): string | null => {
  const match = headingText.match(/^\d+\.\s*(.+)$/);

  return match ? match[1] : null;
};
