import type { Problem, ProblemExtractionFailure } from "shared";

type BuildProblemDetailsResult =
  | { success: boolean; problem: Problem }
  | { success: boolean; error: ProblemExtractionFailure };

export type { BuildProblemDetailsResult };
