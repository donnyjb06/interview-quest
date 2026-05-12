import { afterEach, describe, expect, it } from "vitest";
import {
  buildValidProblemDetails,
  createProblemPageFixture,
} from "../../problem/fixtures/createProblemPageFixture";
import { buildProblemDetails } from "../../problem/buildProblemDetails";

describe("buildProblemDetails", () => {
  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("returns problem object when all required problem data is extracted from document", () => {
    const pathName = "problems/two-sum";
    document.body.innerHTML = createProblemPageFixture();

    const result = buildProblemDetails(pathName);
    const expectedResult = {
      success: true,
      problem: buildValidProblemDetails(),
    };

    expect(result).toEqual(expectedResult);
  });

  it("returns problem object when all required problem data is extracted from document and topics array is empty", () => {
    const pathName = "problems/two-sum";
    document.body.innerHTML = createProblemPageFixture({ isTopicsEmpty: true });

    const result = buildProblemDetails(pathName);
    const expectedResult = {
      success: true,
      problem: buildValidProblemDetails(false),
    };

    expect(result).toEqual(expectedResult);
  });

  it("returns problem extraction failure object when required problem data is missing", () => {
    const pathName = "problems/two-sum";
    document.body.innerHTML = createProblemPageFixture({
      isDescriptionValid: false,
      isConstraintsValid: false,
      isExamplesValid: false,
      isTopicsEmpty: true,
    });

    const result = buildProblemDetails(pathName);
    const expectedResult = {
      success: false,
      error: {
        reason: "MISSING_FIELD",
        missingFields: ["topics", "description", "examples", "constraints"],
        partialProblem: {
          id: "1",
          difficulty: "EASY",
          title: "Two Sum",
          slug: "two-sum",
          description: null,
          constraints: [],
          examples: null,
          topics: [],
        },
      },
    };

    expect(result).toEqual(expectedResult);
  });
});
