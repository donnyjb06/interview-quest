export const extractProblemDifficulty = ():
  | "EASY"
  | "MEDIUM"
  | "HARD"
  | null => {
  const easyDifficulty = document.querySelector(
    ".text-caption.text-difficulty-easy",
  );
  const mediumDifficulty = document.querySelector(
    ".text-caption.text-difficulty-medium",
  );
  const hardDifficulty = document.querySelector(
    ".text-caption.text-difficulty-hard",
  );

  if (easyDifficulty) return "EASY";
  if (mediumDifficulty) return "MEDIUM";
  if (hardDifficulty) return "HARD";

  return null;
};
