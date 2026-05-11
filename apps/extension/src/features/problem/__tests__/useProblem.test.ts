import { describe, expect, it } from "vitest";
import {
  buildValidProblemDetails,
  createProblemPageFixture,
} from "../../../content/problem/fixtures/createProblemPageFixture";
import { useProblem } from "../useProblem";
import { renderHook, waitFor } from "@testing-library/react";

describe("useProblem", () => {
  it("returns null when waiting on problem details to be extracted", () => {
    const { result, unmount } = renderHook(() =>
      useProblem("problems/two-sum"),
    );
    expect(result.current).toBeNull();

    unmount();
  });

  it("updates problem state from null whenever problem is finished extracting", async () => {
    const { result, unmount } = renderHook(() =>
      useProblem("problems/two-sum"),
    );
    expect(result.current).toBeNull();

    document.body.insertAdjacentHTML("beforeend", createProblemPageFixture());

    await waitFor(() => {
      expect(result.current).not.toBeNull();
      expect(result.current).toEqual(buildValidProblemDetails());
    });

    unmount();
  });
});
