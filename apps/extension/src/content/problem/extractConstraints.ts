export const extractConstraints = (container: Element): string[] => {
  const constraints: string[] = [];

  const constraintUList = container.querySelector("ul");
  if (!constraintUList) return constraints;

  return Array.from(constraintUList.querySelectorAll("li")).map(
    (listItem) => listItem.textContent?.trim() ?? "",
  );
};
