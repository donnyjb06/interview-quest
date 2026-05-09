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

export type { Problem, EnrichedProblem, ProblemAiAnalysis };
