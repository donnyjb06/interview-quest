export const extractProblemSlug = (pathName: string): string | null => {
  const parts = pathName.split("/");
  const index = parts.indexOf("problems");

  if (index === -1) return null;

  return parts[index + 1] || null;
};
