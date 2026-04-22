import { Request, Response, NextFunction } from "express";
import { z } from "zod";

export default function validateBody<TSchema>(schema: z.ZodType<TSchema>) {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({ error: "Invalid body" });
    }

    req.body = result.data;
    next();
  };
}
