export const extractTextFromNode = (node: Node) => {
  if (node.nodeType === Node.TEXT_NODE) {
    return node.textContent ?? "";
  }

  if (node.nodeType === Node.ELEMENT_NODE) {
    let result = "";

    node.childNodes.forEach((child) => {
      result += extractTextFromNode(child);
    });

    return result;
  }

  return "";
};
