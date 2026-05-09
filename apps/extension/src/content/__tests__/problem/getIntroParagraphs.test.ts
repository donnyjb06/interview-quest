import { describe, expect, it } from "vitest";
import { getIntroParagraphs } from "../../problem/getIntroParagraphs";

describe("getIntroParagraphs", () => {
  it("returns paragraphs before the nbsp separator paragraph element", () => {
    const container = document.createElement("div");
    container.innerHTML = `
      <p>First paragraph element</p>
      <p>Second paragraph element</p>
      <p>Third paragraph element</p>
      <p>&nbsp;</p>
      <p>This should not be returned</p>
    `;

    const result = getIntroParagraphs(container);

    const paragraphs = container.querySelectorAll("p");

    expect(result).toHaveLength(3);
    expect(result[1].textContent).toBe("Second paragraph element");
    expect(paragraphs[1]).toBe(result[1]);
  });

  it("returns empty array when there are no paragraphs preceding nbsp separator paragraph element", () => {
    const container = document.createElement("div");
    container.innerHTML = `
      <p>&nbsp;</p>
      <p>This should not be returned</p> 
    `;

    const result = getIntroParagraphs(container);

    expect(result).toHaveLength(0);
  });

  it("returns all paragraphs elements when there is no nbsp separator paragraph element", () => {
    const container = document.createElement("div");
    container.innerHTML = `
      <p>First paragraph element</p>
      <p>Second paragraph element</p>
      <p>Third paragraph element</p>
      <p>This should be returned</p>
      <p>This should also be returned<code>This should be returned as well</code></p>
    `;

    const result = getIntroParagraphs(container);
    const paragraphs = container.querySelectorAll("p");

    expect(result).toHaveLength(5);
    expect(result[1].textContent).toBe("Second paragraph element");
    expect(result[1]).toBe(paragraphs[1]);
  });

  it("returns paragraphs preceding nbsp separator paragraph element along with nested inline elements", () => {
    const container = document.createElement("div");
    container.innerHTML = `
      <p>First <code><em>paragraph </em></code>element</p>
      <p>Second paragraph element</p>
      <p>Third paragraph element</p>
      <p>&nbsp;</p>
      <p>This should not be returned</p>
      <p>This should also not be returned<code>This should not be returned as well</code></p>
    `;

    const result = getIntroParagraphs(container);
    const paragraphs = container.querySelectorAll("p");

    expect(result).toHaveLength(3);
    expect(result[0].innerHTML).toBe(
      "First <code><em>paragraph </em></code>element",
    );
    expect(result[1].textContent).toBe("Second paragraph element");
    expect(result[1]).toBe(paragraphs[1]);
  });

  it("returns only paragraph elements preceding nbsp separator paragraph element", () => {
    const container = document.createElement("div");
    container.innerHTML = `
      <p>First <code><em>paragraph </em></code>element</p>
      <h1>This should not be returned</h1>
      <p>Second paragraph element</p>
      <p>Third paragraph element</p>
      <p>&nbsp;</p>
      <p>This should not be returned</p>
      <p>This should also not be returned<code>This should not be returned as well</code></p>
    `;

    const result = getIntroParagraphs(container);
    const paragraphs = container.querySelectorAll("p");

    expect(result).toHaveLength(3);
    expect(result[1].textContent).toBe("Second paragraph element");
    expect(result[1]).toBe(paragraphs[1]);
  });

  it("returns an empty array when the container contains no paragraph elements", () => {
    const container = document.createElement("div");
    container.innerHTML = `
      <h1>This is a example h1</h1>
      <code>const x = 5;</code> 
    `;

    const result = getIntroParagraphs(container);

    expect(result).toHaveLength(0);
  });
});
