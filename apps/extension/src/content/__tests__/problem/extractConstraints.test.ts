import { describe, expect, it } from "vitest";
import { extractConstraints } from "../../problem/extractConstraints";

describe("extractConstraints", () => {
  it("returns array of constraints when constraint list contains list items with nested inline elements", () => {
    const container = document.createElement("div");
    container.innerHTML = `
    <ul>
      <li><code>constraint one</code></li>
      <li><code>constraint two</code></li>
      <li><code>constraint three</code></li>
    </ul>
    `;

    const result = extractConstraints(container);

    expect(result).toHaveLength(3);
    expect(result).toEqual([
      "constraint one",
      "constraint two",
      "constraint three",
    ]);
  });

  it("returns array of constraints when list items contain no nested inline elements", () => {
    const container = document.createElement("div");
    container.innerHTML = `
    <ul>
      <li>constraint one</li>
      <li>constraint two</li>
      <li>constraint three</li>
    </ul>
    `;

    const result = extractConstraints(container);

    expect(result).toHaveLength(3);
    expect(result).toEqual([
      "constraint one",
      "constraint two",
      "constraint three",
    ]);
  });

  it("ignores elements inside of list that are not list items", () => {
    const container = document.createElement("div");
    container.innerHTML = `
    <ul>
      <li>constraint one</li>
      <code>this item should be ignored</code>
      <li>constraint two</li>
      <li>constraint three</li>
    </ul>
    `;

    const result = extractConstraints(container);

    expect(result).toHaveLength(3);
    expect(result).toEqual([
      "constraint one",
      "constraint two",
      "constraint three",
    ]);
  });

  it("ignores empty list item elements inside of list", () => {
    const container = document.createElement("div");
    container.innerHTML = `
    <ul>
      <li></li>
      <li>constraint two</li>
      <li>constraint three</li>
    </ul>
    `;

    const result = extractConstraints(container);

    expect(result).toHaveLength(2);
    expect(result).toEqual(["constraint two", "constraint three"]);
  });

  it("return empty array when there are no list items in list", () => {
    const container = document.createElement("div");
    container.innerHTML = `
      <ul><h2>contains no list items</h2></ul>    
    `;

    const result = extractConstraints(container);

    expect(result).toHaveLength(0);
  });

  it("returns empty array whenever container doesn't contain an unordered list element", () => {
    const container = document.createElement("div");
    container.innerHTML = `
    <ol>
    <li>invalid</li>
    <li>invalid 2</li>
    <li>invalid 3</li>
    </ol>
    `;

    const result = extractConstraints(container);

    expect(result).toHaveLength(0);
  });
});
