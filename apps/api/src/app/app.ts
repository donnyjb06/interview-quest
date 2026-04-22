import express from "express";
import healthRouter from "./routes/health.routes";
import sessionRouter from "./routes/session.routes";

const app = express();

app.use(express.json());
app.use("/", healthRouter);
app.use("/session", sessionRouter);

export default app;
