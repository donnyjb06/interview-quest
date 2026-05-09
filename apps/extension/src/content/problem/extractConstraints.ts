export const extractConstraints = (container: Element): string[] => {
  const constraints: string[] = [];

  const constraintUList = container.querySelector("ul");
  if (!constraintUList) return constraints;

  const constraintListItems = Array.from(
    constraintUList?.querySelectorAll("li"),
  );

  for (const listItem of constraintListItems) {
    if (!listItem.textContent) continue;

    constraints.push(listItem.textContent.trim());
  }

  return constraints;
};
