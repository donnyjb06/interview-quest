export const extractProblemSlug = () => {
  const parts = window.location.pathname.split("/");
  const index = parts.indexOf("problems");

  if (index === -1) return null;

  return parts[index + 1] ?? null;
};
