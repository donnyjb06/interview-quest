import { describe, it, expect } from "vitest";
import { calculateAverage, calculateOverallScore } from "../scoring";
import { AttemptScores } from "../../types/attempt";

describe("calculateAverage", () => {
  it("returns 0 for an empty array", () => {
    expect(calculateAverage([])).toBe(0);
  });

  it("returns the value itself for a single-element array", () => {
    expect(calculateAverage([5])).toBe(5);
    expect(calculateAverage([0])).toBe(0);
    expect(calculateAverage([-3])).toBe(-3);
  });

  it("calculates the average of positive numbers", () => {
    expect(calculateAverage([1, 2, 3, 4, 5])).toBe(3);
    expect(calculateAverage([10, 20, 30])).toBe(20);
  });

  it("calculates the average of negative numbers", () => {
    expect(calculateAverage([-1, -2, -3])).toBe(-2);
  });

  it("calculates the average of mixed positive and negative numbers", () => {
    expect(calculateAverage([-2, 0, 2])).toBe(0);
    expect(calculateAverage([-5, 5])).toBe(0);
  });

  it("handles floating point numbers", () => {
    expect(calculateAverage([1.5, 2.5, 3.5])).toBeCloseTo(2.5);
  });
});

describe("calculateOverallScore", () => {
  it("returns weighted overall score across all score categories", () => {
    const scores: AttemptScores = {
      communication: {
        clarity: 80,
        structure: 90,
        vocabulary: 100,
      },
      technical: {
        correctness: 70,
        efficiency: 60,
        understanding: 50,
      },
    };

    const expectedValue = 79.5;

    const weightedScore = calculateOverallScore(scores);

    expect(weightedScore).toBeCloseTo(expectedValue);
  });

  it("returns 0 when all category scores are 0", () => {
    const scores: AttemptScores = {
      communication: {
        clarity: 0,
        structure: 0,
        vocabulary: 0,
      },
      technical: {
        correctness: 0,
        efficiency: 0,
        understanding: 0,
      },
    };

    const expectedValue = 0;

    const weightedScore = calculateOverallScore(scores);

    expect(weightedScore).toBeCloseTo(expectedValue);
  });

  it("returns maximum weighted score when all category scores are maximum", () => {
    const scores: AttemptScores = {
      communication: {
        clarity: 100,
        structure: 100,
        vocabulary: 100,
      },
      technical: {
        correctness: 100,
        efficiency: 100,
        understanding: 100,
      },
    };

    const expectedValue = 100;

    const weightedScore = calculateOverallScore(scores);

    expect(weightedScore).toBeCloseTo(expectedValue);
  });

  it("correctly calculates weighted score from decimal averages", () => {
    const scores: AttemptScores = {
      communication: {
        clarity: 95,
        structure: 82,
        vocabulary: 88,
      },
      technical: {
        correctness: 73,
        efficiency: 91,
        understanding: 84,
      },
    };

    const expectedValue = 86.35;

    const weightedScore = calculateOverallScore(scores);

    expect(weightedScore).toBeCloseTo(expectedValue);
  });

  it("weights categories differently even when averages are identical", () => {
    const scores: AttemptScores = {
      communication: {
        clarity: 100,
        structure: 100,
        vocabulary: 100,
      },
      technical: {
        correctness: 50,
        efficiency: 50,
        understanding: 50,
      },
    };

    const expectedValue = 82.5;

    const weightedScore = calculateOverallScore(scores);

    expect(weightedScore).toBeCloseTo(expectedValue);
  });
});
