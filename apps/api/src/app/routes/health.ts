import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ status: "UP_AND_RUNNING" });
});

export default router;
