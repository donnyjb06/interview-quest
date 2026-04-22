import { FollowUp } from "./followup";
import { Language } from "./language";

type Attempt = {
  id: string;
  sessionId: string;
  totalAttemptTimeMs: number;
  language: Language;
  status: AttemptStatus;
  results: {
    scores: AttemptScores;
    strongPoints: string[];
    weakPoints: string[];
  } | null;
  followUps: FollowUp[] | null;
  startedAt: string;
  endedAt: string | null;
};

type AttemptScores = {
  communication: {
    clarity: number;
    structure: number;
    vocabulary: number;
  };
  technical: {
    correctness: number;
    efficiency: number;
    understanding: number;
  };
};

type AttemptStatus =
  | "ACTIVE"
  | "FINALIZING_FOR_ANALYSIS"
  | "ANALYZING_INITIAL_SOLUTION"
  | "AWAITING_FOLLOW_UP"
  | "EVALUATING_FINAL_SOLUTION"
  | "SCORED";

export type { Attempt, AttemptStatus, AttemptScores };
