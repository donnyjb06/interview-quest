import express from "express";
import healthRouter from "./routes/health.routes";
import sessionRouter from "./routes/session.routes";
import { errorHandler } from "./middleware/errors";

const app = express();

app.use(express.json());
app.use("/", healthRouter);
app.use("/session", sessionRouter);
app.use(errorHandler);

export default app;
