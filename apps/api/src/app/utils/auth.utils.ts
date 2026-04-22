import { mockUser } from "../mocks/user.mock";
import { AuthPayload } from "../types/auth.types";

const extractToken = (token: string) => {
  const extractedToken = token.split(" ")[1];
  return extractedToken || null;
};

const verifyToken = (token: string, secret: string): AuthPayload | null => {
  return mockUser;
};

export { extractToken, verifyToken };
