export const extractConstraints = (container: Element): string[] => {
  const constraints: string[] = [];

  const constraintUList = container.querySelector("ul");
  if (!constraintUList) return constraints;

  const constraintListItems = Array.from(
    constraintUList.querySelectorAll("li"),
  );

  for (const listItem of constraintListItems) {
    const hasChildElement = !!listItem.firstChild;
    if (!hasChildElement || !listItem.firstChild.textContent) break;

    constraints.push(listItem.firstChild.textContent);
  }

  return constraints;
};
