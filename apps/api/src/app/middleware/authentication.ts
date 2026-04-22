import { NextFunction, Request, Response } from "express";
import { extractToken, verifyToken } from "../utils/auth.utils";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({
      code: "USER_NOT_AUTHORIZED",
      error: "Missing authorization header",
    });
  }
  const token = extractToken(authHeader);
  if (!token) {
    return res
      .status(401)
      .json({ code: "USER_NOT_AUTHORIZED", error: "Missing access token" });
  }

  const payload = verifyToken(token, "example_secret");

  if (!payload) {
    return res.status(401).json({
      code: "USER_NOT_AUTHORIZED",
      error: "Invalid access token",
    });
  }
  req.user = payload;
  next();
};
