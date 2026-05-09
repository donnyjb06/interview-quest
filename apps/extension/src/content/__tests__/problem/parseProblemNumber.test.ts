import { describe, it, expect } from "vitest";
import { parseProblemNumber } from "../../problem/parseProblemNumber";

describe("parseProblemNumber", () => {
  it("returns the problem number when heading contains proper number prefix", () => {
    const headingText = "1. Two Sum";
    const result = parseProblemNumber(headingText);

    expect(result).toBe("1");
  });

  it("returns null when heading does not start with digits followed by a dot", () => {
    const headingText = "abc2. Two Sum";
    const result = parseProblemNumber(headingText);

    expect(result).toBeNull();
  });

  it("returns null when heading contains digits without a dot", () => {
    const headingText = "2 Two Sum";
    const result = parseProblemNumber(headingText);

    expect(result).toBeNull();
  });

  it("returns null when heading contains dot without digit prefix", () => {
    const headingText = ". Two Sum";
    const result = parseProblemNumber(headingText);

    expect(result).toBeNull();
  });

  it("returns null when heading only contains title", () => {
    const headingText = "Two Sum";
    const result = parseProblemNumber(headingText);

    expect(result).toBeNull();
  });

  it("returns problem number when number prefix contains multi-digit number", () => {
    const headingText = "123. Two Sum";
    const result = parseProblemNumber(headingText);

    expect(result).toBe("123");
  });

  it("returns problem number when heading only contains valid number prefix", () => {
    const headingText = "1.";
    const result = parseProblemNumber(headingText);

    expect(result).toBe("1");
  });
});
