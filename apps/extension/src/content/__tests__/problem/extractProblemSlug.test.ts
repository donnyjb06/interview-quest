import { describe, expect, it } from "vitest";
import { extractProblemSlug } from "../../problem/extractProblemSlug";

describe("extractProblemSlug", () => {
  it("returns problem slug when path name contains valid parent segment and slug segments", () => {
    const pathName = "problems/two-sum";
    const result = extractProblemSlug(pathName);

    expect(result).toBe("two-sum");
  });

  it("returns problem slug when path name ends with a trailing slash", () => {
    const pathName = "problems/two-sum/";
    const result = extractProblemSlug(pathName);

    expect(result).toBe("two-sum");
  });

  it("returns problem slug when path name has both parent and child segment", () => {
    const pathName = "problems/two-sum/child-segment";
    const result = extractProblemSlug(pathName);

    expect(result).toBe("two-sum");
  });

  it("returns problem slug when parent segment has a leading slash", () => {
    const pathName = "/problems/two-sum/child-segment";
    const result = extractProblemSlug(pathName);

    expect(result).toBe("two-sum");
  });

  it("returns null when path name doesn't contain valid parent segment", () => {
    const pathName = "invalid-segment/two-sum";
    const result = extractProblemSlug(pathName);

    expect(result).toBeNull();
  });

  it("returns null when path name only contains one segment", () => {
    const pathName = "two-sum";
    const result = extractProblemSlug(pathName);

    expect(result).toBeNull();
  });

  it("returns null when path name only contains valid parent segment with no trailing slash", () => {
    const pathName = "problems";
    const result = extractProblemSlug(pathName);

    expect(result).toBeNull();
  });

  it("returns null when path name only contains valid parent segment with trailing slash", () => {
    const pathName = "problems/";
    const result = extractProblemSlug(pathName);

    expect(result).toBeNull();
  });

  it("returns null when path name is an empty string", () => {
    const pathName = "";
    const result = extractProblemSlug(pathName);

    expect(result).toBeNull();
  });
});
