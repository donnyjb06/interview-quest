import { describe, expect, it } from "vitest";
import { extractExamples } from "../../problem/extractExamples";

describe("extractExamples", () => {
  it("returns array of valid examples from multiple pre elements", () => {
    const container = document.createElement("div");

    container.innerHTML = `
  <pre>
    <h2>Input:</h2>
    input one
    <h2>Output:</h2>
    output one
    <h2>Explanation:</h2>
    explanation one
  </pre>

  <pre>
    <h2>Input:</h2>
    input two
    <h2>Output:</h2>
    output two
  </pre>
`;

    const result = extractExamples(container);

    expect(result).toHaveLength(2);
    expect(result).toEqual([
      {
        input: "input one",
        output: "output one",
        explanation: "explanation one",
      },
      {
        input: "input two",
        output: "output two",
        explanation: null,
      },
    ]);
  });

  it("returns array of valid examples objects when container contains valid and invalid pre elements", () => {
    const container = document.createElement("div");

    container.innerHTML = `
  <pre>
    <h2>Input:</h2>
    valid input
    <h2>Output:</h2>
    valid output
  </pre>

  <pre>
    <h2>Input:</h2>
    <h2>Explanation:</h2>
    missing output
  </pre>

  <pre>
    <h2>Input:</h2>
    another valid input
    <h2>Output:</h2>
    another valid output
    <h2>Explanation:</h2>
    another explanation
  </pre>
`;

    const result = extractExamples(container);
    expect(result).toHaveLength(2);
    expect(result).toEqual([
      {
        input: "valid input",
        output: "valid output",
        explanation: null,
      },
      {
        input: "another valid input",
        output: "another valid output",
        explanation: "another explanation",
      },
    ]);
  });

  it("returns null when container contains no valid pre elements", () => {
    const container = document.createElement("div");

    container.innerHTML = `
  <p>This is not a pre element</p>
  <code>const x = 1;</code>
`;

    const result = extractExamples(container);

    expect(result).toBeNull();
  });
});
