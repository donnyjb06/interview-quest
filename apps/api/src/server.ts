import "dotenv/config";
import app from "./app/app";
import { PORT } from "./app/config/env";

app.listen(PORT, () => {
  console.log(`InterviewQuest is now listening through port ${PORT}`);
});
