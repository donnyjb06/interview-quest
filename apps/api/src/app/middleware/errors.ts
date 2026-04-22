import { ErrorRequestHandler } from "express";
import BaseError from "../errors/base.error";
import ValidationError from "../errors/validation.error";

export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  if (err instanceof ValidationError) {
    return res
      .status(err.status)
      .json({ code: err.code, message: err.message, errors: err.errors });
  }

  if (err instanceof BaseError) {
    return res
      .status(err.status)
      .json({ code: err.code, message: err.message });
  }

  return res.status(500).json({
    code: "INTERNAL_SERVER_ERROR",
    message: "An unknown error has occured",
  });
};
