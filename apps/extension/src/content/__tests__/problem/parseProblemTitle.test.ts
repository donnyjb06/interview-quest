import { describe, it, expect } from "vitest";
import { parseProblemTitle } from "../../problem/parseProblemTitle";

describe("parseProblemTitle", () => {
  it("returns problem title when heading text contains valid title", () => {
    const headingText = "1. Two Sum";
    const result = parseProblemTitle(headingText);

    expect(result).toBe("Two Sum");
  });

  it("return problem title when heading text contains only dot and title", () => {
    const headingText = ". Two Sum";
    const result = parseProblemTitle(headingText);

    expect(result).toBe("Two Sum");
  });

  it("return problem title when heading text contains only title", () => {
    const headingText = "Two Sum";
    const result = parseProblemTitle(headingText);

    expect(result).toBe("Two Sum");
  });

  it("returns null when heading text only contains number and dot prefix", () => {
    const headingText = "1.";
    const result = parseProblemTitle(headingText);

    expect(result).toBeNull();
  });

  it("returns problem title when heading text contains multi-digit number and dot prefix, and title", () => {
    const headingText = "123. Two Sum";
    const result = parseProblemTitle(headingText);

    expect(result).toBe("Two Sum");
  });

  it("returns null when heading text is an empty string", () => {
    const headingText = "";
    const result = parseProblemTitle(headingText);

    expect(result).toBeNull();
  });

  it("returns null when heading text only contains whitespace", () => {
    const headingText = "   ";
    const result = parseProblemTitle(headingText);

    expect(result).toBeNull();
  });
});
