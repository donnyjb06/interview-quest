import { SELECTORS } from "../../lib/constants";

export const extractProblemDifficulty = ():
  | "EASY"
  | "MEDIUM"
  | "HARD"
  | null => {
  const easyDifficulty = document.querySelector(
    `${SELECTORS.difficultyContainer} > .text-difficulty-easy`,
  );
  const mediumDifficulty = document.querySelector(
    `${SELECTORS.difficultyContainer} > .text-difficulty-medium`,
  );
  const hardDifficulty = document.querySelector(
    `${SELECTORS.difficultyContainer} > .text-difficulty-hard`,
  );

  if (easyDifficulty) return "EASY";
  if (mediumDifficulty) return "MEDIUM";
  if (hardDifficulty) return "HARD";

  return null;
};
