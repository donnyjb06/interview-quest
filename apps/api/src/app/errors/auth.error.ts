import BaseError from "./base.error";

class AuthenticationError extends BaseError {
  constructor() {
    super("Authentication required", "USER_NOT_AUTHENTICATED", 401);
  }
}

class AuthorizationError extends BaseError {
  constructor() {
    super("User is not authorized", "FORBIDDEN_REQUEST", 403);
  }
}

export { AuthenticationError, AuthorizationError };
