import type { AttemptScores } from "../types/attempt";

const CATEGORY_WEIGHTS = {
  communication: 0.65,
  technical: 0.35,
};

const calculateAverage = (scores: number[]): number => {
  if (scores.length === 0) return 0;

  const total = scores.reduce((sum, score) => sum + score, 0);
  return total / scores.length;
};

const calculateOverallScore = (scores: AttemptScores): number => {
  let total = 0;

  for (const category in scores) {
    const values = Object.values(scores[category as keyof AttemptScores]);
    const averageScore = calculateAverage(values);

    const weight = CATEGORY_WEIGHTS[category as keyof AttemptScores];

    total += averageScore * weight;
  }
  return total;
};

export { calculateOverallScore, calculateAverage };
