import { describe, expect, it, afterEach } from "vitest";
import {
  buildValidProblemDetails,
  createProblemPageFixture,
} from "../../../content/problem/fixtures/createProblemPageFixture";
import { useProblem } from "../useProblem";
import { cleanup, renderHook, waitFor } from "@testing-library/react";
import { PROBLEM_EXTRACTION_TIMEOUT_MS } from "../problem.constants";

describe("useProblem", () => {
  const TIMEOUT_BUFFER_MS = 1000;

  afterEach(() => {
    cleanup();
    document.body.innerHTML = "";
  });

  it("returns null when waiting on problem details to be extracted", () => {
    const { result } = renderHook(() => useProblem("problems/two-sum"));
    expect(result.current.problem).toBeNull();
    expect(result.current.status).toBe("WAITING");
  });

  it("updates problem state from null whenever problem is finished extracting", async () => {
    const { result } = renderHook(() => useProblem("problems/two-sum"));
    expect(result.current.problem).toBeNull();
    expect(result.current.status).toBe("WAITING");

    document.body.insertAdjacentHTML("beforeend", createProblemPageFixture());

    await waitFor(() => {
      expect(result.current.problem).not.toBeNull();
      expect(result.current.status).toBe("SUCCESS");
      expect(result.current.problem).toEqual(buildValidProblemDetails());
    });
  });

  it(
    "returns null if problem details fail to be extracted within the timeout period",
    async () => {
      const { result } = renderHook(() => useProblem("problems/two-sum"));

      document.body.innerHTML = createProblemPageFixture({
        isDescriptionValid: false,
        isExamplesValid: false,
      });
      await waitFor(
        () => {
          expect(result.current.status).toBe("FAILED");
          expect(result.current.problem).toBeNull();
        },
        { timeout: PROBLEM_EXTRACTION_TIMEOUT_MS + TIMEOUT_BUFFER_MS },
      );
    },
    PROBLEM_EXTRACTION_TIMEOUT_MS + TIMEOUT_BUFFER_MS * 2,
  );
});
