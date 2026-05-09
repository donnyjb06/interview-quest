import { describe, expect, it } from "vitest";
import { extractTextFromNode } from "../extractTextFromNode";

describe("extractTextFromNode", () => {
  it("returns combined text content from node and nested element nodes", () => {
    const node = document.createElement("p");
    node.innerHTML = `Given <code>nums</code>`;

    const result = extractTextFromNode(node);
    expect(result).toBe("Given nums");
  });

  it("returns text when node input is a text node", () => {
    const node = new Text("Hello");
    const result = extractTextFromNode(node);

    expect(result).toBe("Hello");
  });

  it("returns combined text when input node contains deeply nested nodes", () => {
    const p = document.createElement("p");
    p.innerHTML = "Given<code><em><b> nums</b></em></code>";

    const result = extractTextFromNode(p);
    expect(result).toBe("Given nums");
  });

  it("returns text when node input is an element that contains plain text", () => {
    const node = document.createElement("p");
    node.innerHTML = "Given nums";
    const result = extractTextFromNode(node);

    expect(result).toBe("Given nums");
  });

  it("returns empty string when node input is an invalid node type", () => {
    const node = document.createComment(
      "Hello there, this is an invalid input",
    );
    const result = extractTextFromNode(node);

    expect(result).toBe("");
  });

  it("returns empty string whenever input node is empty", () => {
    const node = document.createElement("p");
    const result = extractTextFromNode(node);

    expect(result).toBe("");
  });
});
