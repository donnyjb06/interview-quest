import { describe, expect, it } from "vitest";
import { extractExample } from "../../problem/extractExample";

describe("extractExample", () => {
  it("returns full valid example object when pre element contains input, output, and explanation heading elements followed by text nodes", () => {
    const exampleElement = document.createElement("pre");
    exampleElement.innerHTML = `
      <h2>Input:</h2>
      example input
      <h2>Output:</h2>
      example output
      <h2>Explanation:</h2>
      example explanation
    `;
    const result = extractExample(exampleElement);

    expect(result).toEqual({
      input: "example input",
      output: "example output",
      explanation: "example explanation",
    });
  });

  it("returns null when example pre element is missing input label element", () => {
    const exampleElement = document.createElement("pre");
    exampleElement.innerHTML = `
      example input
      <h2>Output:</h2>
      example output
      <h2>Explanation:</h2>
      example explanation
    `;

    const result = extractExample(exampleElement);

    expect(result).toBeNull();
  });

  it("returns null when example pre element is missing output label element", () => {
    const exampleElement = document.createElement("pre");
    exampleElement.innerHTML = `
      <h2>Input:</h2>
      example input
      example output
      <h2>Explanation:</h2>
      example explanation
    `;

    const result = extractExample(exampleElement);

    expect(result).toBeNull();
  });

  it("returns example object with null explanation value when explanation label element is missing", () => {
    const exampleElement = document.createElement("pre");
    exampleElement.innerHTML = `
      <h2>Input:</h2>
      example input
      <h2>Output:</h2>
      example output
    `;

    const result = extractExample(exampleElement);

    expect(result).toEqual({
      input: "example input",
      output: "example output",
      explanation: null,
    });
  });

  it("returns trimmed text content when node following label contains whitespace", () => {
    const exampleElement = document.createElement("pre");
    exampleElement.innerHTML = `
      <h2>Input:</h2>
          example input
      <h2>Output:</h2>
      example output
    `;

    const result = extractExample(exampleElement);
    expect(result).toEqual({
      input: "example input",
      output: "example output",
      explanation: null,
    });
  });

  it("returns null when node following label is an element node", () => {
    const exampleElement = document.createElement("pre");
    exampleElement.innerHTML = `
      <h2>Input:</h2>
      <div>example input</div>
      <h2>Output:</h2>
      example output
      <h2>Explanation:</h2>
      example explanation
    `;

    const result = extractExample(exampleElement);

    expect(result).toBeNull();
  });

  it("returns null when input label exists but input value is empty", () => {
    const exampleElement = document.createElement("pre");
    exampleElement.innerHTML = `
      <h2>Input:</h2>
      <h2>Output:</h2>
      example Output
      <h2>Explanation:</h2>
      example explanation
    `;

    const result = extractExample(exampleElement);

    expect(result).toBeNull();
  });

  it("returns null when output label exists but output value is empty", () => {
    const exampleElement = document.createElement("pre");
    exampleElement.innerHTML = `
      <h2>Input:</h2>
      example input
      <h2>Output:</h2>
      <h2>Explanation:</h2>
      example explanation
    `;

    const result = extractExample(exampleElement);

    expect(result).toBeNull();
  });

  it("ignores unrelated labels/content", () => {
    const exampleElement = document.createElement("pre");
    exampleElement.innerHTML = `
      <code>Unrelated Label:</code>
      example input
      <h2>Output:</h2>
      <h2>Explanation:</h2>
      example explanation
    `;

    const result = extractExample(exampleElement);

    expect(result).toBeNull();
  });
});
