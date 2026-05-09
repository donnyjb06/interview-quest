import { describe, expect, it } from "vitest";
import { extractProblemDescription } from "../../problem/extractProblemDescription";

describe("extractProblemDescription", () => {
  it("returns combined description string when container contains multiple intro paragraphs before nbsp separator paragraph", () => {
    const container = document.createElement("div");
    container.innerHTML = `
    <p>Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.</p>
    <p>You may assume that each input would have exactly one solution.</p>
    <p>&nbsp;</p>
    <p>This should not be included.</p>
    `;

    const result = extractProblemDescription(container);

    expect(result).toBe(
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution.",
    );
  });

  it("Returns combined description string when intro paragraphs contain nested inline elements", () => {
    const container = document.createElement("div");
    container.innerHTML = `
    <p>Given an array of integers <code>nums</code> and an integer <code>target</code>.</p>
    <p>Return the indices of the two numbers.</p>
    <p>&nbsp;</p> 
   `;

    const result = extractProblemDescription(container);

    expect(result).toBe(
      "Given an array of integers nums and an integer target. Return the indices of the two numbers.",
    );
  });

  it("Returns null when first paragraph is nbsp separator paragraph", () => {
    const container = document.createElement("div");
    container.innerHTML = `
      <p>&nbsp;</p>
      <p>This should not be included.</p>
    `;

    const result = extractProblemDescription(container);

    expect(result).toBeNull();
  });

  it("returns all paragraph elements when container contains no nbsp separator element", () => {
    const container = document.createElement("div");
    container.innerHTML = `
    <p>first element.</p>
    <p>second element.</p>
    <p>third element.</p>
    `;

    const result = extractProblemDescription(container);

    expect(result).toBe("first element. second element. third element.");
  });

  it("returns null when container contains no paragraph elements", () => {
    const container = document.createElement("div");
    container.innerHTML = `
    <h2>This is a test and shouldn't be returned</h2>
    <code>Hello there</code>
    `;

    const result = extractProblemDescription(container);

    expect(result).toBeNull();
  });

  it("returns trimmed combined description string when paragraph text contains surrounding whitespace", () => {
    const container = document.createElement("div");
    container.innerHTML = `
    <p>
    First paragraph.
    </p>
    <p>
    Second paragraph.
    </p>
    <p>&nbsp;</p>
    `;

    const result = extractProblemDescription(container);

    expect(result).toBe("First paragraph. Second paragraph.");
  });
});
