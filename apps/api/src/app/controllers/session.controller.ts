import { mockAttempt } from "./../mocks/attempt.mock";
import { Request, Response } from "express";
import { InitializeSessionBody } from "../validation/initialize-session-schema";
import { mockSession } from "../mocks/session.mock";
import { mockUser } from "../mocks/user.mock";

const initializeSession = (
  req: Request<{}, {}, InitializeSessionBody>,
  res: Response,
) => {
  const { problem } = req.body;
  // TODO: use problem to create enriched problem

  return res.status(200).json({ session: mockSession, attempt: mockAttempt });
};

export { initializeSession };
