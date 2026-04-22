import express from "express";
import validateBody from "../middleware/validate-body";
import { initializeSessionSchema } from "../validation/initialize-session-schema";
import { initializeSession } from "../controllers/session.controller";

const router = express.Router();

router.post("/", validateBody(initializeSessionSchema), initializeSession);

export default router;
