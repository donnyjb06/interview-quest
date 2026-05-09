export const getIntroParagraphs = (container: Element): Element[] => {
  const paragraphElements = Array.from(container.querySelectorAll("p"));

  const introElements: Element[] = [];

  for (const p of paragraphElements) {
    const text = p.textContent?.replace(/\u00A0/g, "").trim();

    if (!text) break;

    introElements.push(p);
  }

  return introElements;
};
