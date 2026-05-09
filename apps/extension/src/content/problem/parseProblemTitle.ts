export const parseProblemTitle = (headingText: string): string | null => {
  const normalizedHeading = headingText.trim();

  if (/^\d+\.\s*$/.test(normalizedHeading)) {
    return null;
  }

  const match = normalizedHeading.match(/^(?:\d+\.\s*|\.\s*)?(.+)$/);

  return match ? match[1].trim() : null;
};
