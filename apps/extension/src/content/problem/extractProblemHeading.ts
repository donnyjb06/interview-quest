export const extractProblemHeading = (
  container: ParentNode = document,
): string | null => {
  const titleLink = container.querySelector("a");
  const title = titleLink?.textContent.trim();

  return title || null;
};
