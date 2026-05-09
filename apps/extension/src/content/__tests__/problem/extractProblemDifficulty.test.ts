import { afterEach, describe, expect, it } from "vitest";
import { extractProblemDifficulty } from "../../problem/extractProblemDifficulty";

describe("extractProblemDifficulty", () => {
  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("returns easy difficulty whenever document contains element with easy difficulty class name and text content", () => {
    document.body.innerHTML = `
      <div>
        <p class="text-caption text-difficulty-easy">Easy</p>
      </div>  
    `;

    const result = extractProblemDifficulty();

    expect(result).toBe("EASY");
  });

  it("returns medium difficulty whenever document contains element with medium difficulty class name and text content", () => {
    document.body.innerHTML = `
      <div>
        <p class="text-caption text-difficulty-medium">Medium</p>
      </div>  
    `;

    const result = extractProblemDifficulty();

    expect(result).toBe("MEDIUM");
  });

  it("returns hard difficulty whenever document contains element with hard difficulty class name and text content", () => {
    document.body.innerHTML = `
      <div>
        <p class="text-caption text-difficulty-hard">Hard</p>
      </div>  
    `;

    const result = extractProblemDifficulty();

    expect(result).toBe("HARD");
  });

  it("returns null whenever document contains no element with valid difficulty class name", () => {
    document.body.innerHTML = `
      <div>
        <p class="text-caption text-difficulty-invalid">Hard</p>
      </div>  
    `;

    const result = extractProblemDifficulty();

    expect(result).toBeNull();
  });

  it("returns difficulty when document contains element with valid difficulty class name with no text content", () => {
    document.body.innerHTML = `
      <div>
        <p class="text-caption text-difficulty-hard"></p>
      </div>  
    `;

    const result = extractProblemDifficulty();

    expect(result).toBe("HARD");
  });
});
