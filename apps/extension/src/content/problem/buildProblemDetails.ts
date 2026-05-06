import type { Problem } from "shared";
import { extractProblemSlug } from "./extractProblemSlug";
import { extractProblemMeta } from "./extractProblemMeta";
import { SELECTORS } from "../../lib/constants";
import { extractProblemDescription } from "./extractProblemDescription";
import { extractExamples } from "./extractExamples";
import { extractConstraints } from "./extractConstraints";
import { extractProblemTopics } from "./extractProblemTopics";
import { extractProblemDifficulty } from "./extractProblemDifficulty";

export const buildProblemDetails = () => {
  const pathName = window.location.pathname;
  const slug = extractProblemSlug(pathName);
  const metaData = extractProblemMeta();

  const problemDetailsContainer = document.querySelector(SELECTORS.details);
  if (!problemDetailsContainer) return null;

  const description = extractProblemDescription(problemDetailsContainer);
  const examples = extractExamples(problemDetailsContainer);
  const constraints = extractConstraints(problemDetailsContainer);
  const topics = extractProblemTopics();
  const difficulty = extractProblemDifficulty();

  if (
    !slug ||
    !metaData ||
    !description ||
    !examples ||
    !(constraints.length > 0) ||
    !difficulty
  ) {
    return null;
  }

  const problem: Problem = {
    id: metaData.number,
    title: metaData.title,
    slug,
    description,
    difficulty,
    examples,
    constraints,
    topics,
  };

  return problem;
};
