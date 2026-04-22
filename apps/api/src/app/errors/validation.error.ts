import BaseError from "./base.error";

export default class ValidationError extends BaseError {
  public errors: string[];

  constructor(errors: string[]) {
    super("Validation failed", "VALIDATION_ERROR", 400);
    this.errors = errors;
  }
}
