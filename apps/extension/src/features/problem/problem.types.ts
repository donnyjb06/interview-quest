import type { Problem, ProblemExtractionFailure } from "shared";

type BuildProblemDetailsResult =
  | { success: true; problem: Problem }
  | { success: false; error: ProblemExtractionFailure };

export type { BuildProblemDetailsResult };
