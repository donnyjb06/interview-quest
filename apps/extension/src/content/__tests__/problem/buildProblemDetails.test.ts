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

    expect(result).toEqual(buildValidProblemDetails());
  });

  it("returns problem object when all required problem data is extracted from document and topics array is empty", () => {
    const pathName = "problems/two-sum";
    document.body.innerHTML = createProblemPageFixture({ isTopicsEmpty: true });

    const result = buildProblemDetails(pathName);

    expect(result).toEqual(buildValidProblemDetails(false));
  });

  it("returns null when all required problem data is missing", () => {
    const pathName = "problems/two-sum";
    document.body.innerHTML = createProblemPageFixture({
      isMetaValid: false,
      isDescriptionValid: false,
      isConstraintsValid: false,
      isExamplesValid: false,
    });

    const result = buildProblemDetails(pathName);

    expect(result).toBeNull();
  });

  it("returns null when required problem meta data is not extracted from document", () => {
    const pathName = "problems/two-sum";
    document.body.innerHTML = createProblemPageFixture({ isMetaValid: false });

    const result = buildProblemDetails(pathName);

    expect(result).toBeNull();
  });

  it("returns null when required problem description is not extracted from document", () => {
    const pathName = "problems/two-sum";
    document.body.innerHTML = createProblemPageFixture({
      isDescriptionValid: false,
    });

    const result = buildProblemDetails(pathName);

    expect(result).toBeNull();
  });

  it("returns null when required problem examples are not extracted from document", () => {
    const pathName = "problems/two-sum";
    document.body.innerHTML = createProblemPageFixture({
      isExamplesValid: false,
    });

    const result = buildProblemDetails(pathName);

    expect(result).toBeNull();
  });

  it("returns null when required constraints are not extracted from document", () => {
    const pathName = "problems/two-sum";
    document.body.innerHTML = createProblemPageFixture({
      isConstraintsValid: false,
    });

    const result = buildProblemDetails(pathName);

    expect(result).toBeNull();
  });

  it("returns null when required difficulty is not extracted from document", () => {
    const pathName = "problems/two-sum";
    document.body.innerHTML = createProblemPageFixture({
      isDifficultyValid: false,
    });

    const result = buildProblemDetails(pathName);

    expect(result).toBeNull();
  });
});
