import { z } from "zod";

const initializeSessionSchema = z.strictObject({
  userId: z.string(),
  problem: z.strictObject({
    id: z.string(),
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    difficulty: z.enum(["EASY", "MEDIUM", "HARD"]),
    examples: z.array(
      z.strictObject({
        input: z.string(),
        output: z.string(),
        explanation: z.string().nullable(),
      }),
    ),
    constraints: z.array(z.string()),
    topics: z.array(z.string()),
  }),
});

type InitializeSessionBody = z.infer<typeof initializeSessionSchema>;

export { initializeSessionSchema, type InitializeSessionBody };
