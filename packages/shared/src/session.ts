type Session = {
  id: string;
  status: SessionStatus;
  userId: string;
  problemId: string;
  startedAt: string;
  endedAt: string | null;
  currentAttemptId: string | null;
  bestAttemptId: string | null;
};

type SessionStatus = "ACTIVE" | "COMPLETED" | "PAUSED";

export type { Session, SessionStatus };
