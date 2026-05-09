import { describe, it, expect, afterEach } from "vitest";
import { extractProblemHeading } from "../../problem/extractProblemHeading";

describe("extractProblemHeading", () => {
  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("returns the heading text when the heading link exists in the DOM", () => {
    document.body.innerHTML = `
      <div class="text-title-large">
        <a href="/problems/two-sum">1. Two Sum</a>
      </div> 
    `;

    const result = extractProblemHeading(document);

    expect(result).toBe("1. Two Sum");
  });

  it("returns null whenever the heading link doesn't exist in the DOM", () => {
    document.body.innerHTML = `
      <div class="text-title-large">
        <p>Anchor tag does not exist</p>
      </div> 
    `;

    const result = extractProblemHeading(document);
    expect(result).toBeNull();
  });

  it("trims extra whitespace from beginning and end of heading", () => {
    document.body.innerHTML = `
      <div class="text-title-large"> 
        <a href="/problems/two-sum">
          1. Two Sum
        </a>
      </div>
    `;

    const result = extractProblemHeading(document);
    expect(result).toBe("1. Two Sum");
  });

  it("returns null when heading link is empty", () => {
    document.body.innerHTML = `
      <div class="text-title-large">
        <a href="/problems/two-sum"></a>
      </div> 
    `;

    const result = extractProblemHeading(document);
    expect(result).toBeNull();
  });
});
