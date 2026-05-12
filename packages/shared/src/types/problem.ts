type Problem = {
  id: string;
  slug: string;
  title: string;
  description: string;
  difficulty: "EASY" | "MEDIUM" | "HARD";
  examples: {
    input: string;
    output: string;
    explanation: string | null;
  }[];
  constraints: string[];
  topics: string[] | null;
};

type EnrichedProblem = Problem & {
  aiAnalysis: ProblemAiAnalysis;
};

type ProblemAiAnalysis = {
  candidateSolutions: {
    patterns: string[];
    bigO: {
      space: string;
      time: string;
    };
    commonPitfalls: string[];
  }[];
  followUpGuidelines: string[];
};

type RequiredProblemDetailField =
  | "slug"
  | "id"
  | "title"
  | "description"
  | "examples"
  | "constraints"
  | "difficulty";

type PartialProblem = {
  [K in keyof Problem]: Problem[K] | null;
};

type ProblemExtractionFailureReason = "MISSING_FIELD" | "MISSING_CONTAINER";

type ProblemExtractionFailure = {
  reason: ProblemExtractionFailureReason;
  missingFields?: RequiredProblemDetailField[];
  partialProblem?: PartialProblem;
};

export type {
  Problem,
  EnrichedProblem,
  ProblemAiAnalysis,
  RequiredProblemDetailField,
  ProblemExtractionFailure,
  PartialProblem,
};
