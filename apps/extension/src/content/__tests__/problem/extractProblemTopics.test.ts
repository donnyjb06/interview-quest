import { describe, expect, it } from "vitest";
import { extractProblemTopics } from "../../problem/extractProblemTopics";

describe("extractProblemTopics", () => {
  it("returns array of topics whenever document contains elements with matching topic class name", () => {
    document.body.innerHTML = `
    <div class="overflow-hidden transition-all">
      <div class="mt-2 flex flex-wrap gap-1 pl-7">
        <div class="text-caption">Array</div>
        <div class="text-caption">Hash Map</div>
        <div class="text-caption">Bucket Sort</div>
      </div>
    </div>
    `;

    const result = extractProblemTopics();

    expect(result).toEqual(["Array", "Hash Map", "Bucket Sort"]);
  });

  it("returns empty array when document contains no elements with matching topic class name", () => {
    document.body.innerHTML = `
    <div class="overflow-hidden transition-all">
      <div class="mt-2 flex flex-wrap gap-1 pl-7">
      </div>
    </div>
    `;

    const result = extractProblemTopics();

    expect(result).toHaveLength(0);
  });
});
