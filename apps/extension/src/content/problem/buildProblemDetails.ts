import type {
  PartialProblem,
  Problem,
  RequiredProblemDetailField,
} from "shared";
import { extractProblemSlug } from "./extractProblemSlug";
import { extractProblemMeta } from "./extractProblemMeta";
import { SELECTORS } from "../../lib/constants";
import { extractProblemDescription } from "./extractProblemDescription";
import { extractExamples } from "./extractExamples";
import { extractConstraints } from "./extractConstraints";
import { extractProblemTopics } from "./extractProblemTopics";
import { extractProblemDifficulty } from "./extractProblemDifficulty";
import type { BuildProblemDetailsResult } from "../../features/problem/problem.types";
import { getMissingFields } from "../../features/problem/problem.utils";

export const buildProblemDetails = (
  pathName: string,
): BuildProblemDetailsResult => {
  const slug = extractProblemSlug(pathName);
  const metaData = extractProblemMeta();

  const problemDetailsContainer = document.querySelector(SELECTORS.details);
  if (!problemDetailsContainer)
    return { success: false, error: { reason: "MISSING_CONTAINER" } };

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
    const partialProblem: PartialProblem = {
      slug,
      topics,
      id: metaData?.number || null,
      title: metaData?.title || null,
      description,
      examples,
      constraints,
      difficulty,
    };

    const missingDetails: RequiredProblemDetailField[] =
      getMissingFields(partialProblem);

    const problemFailure: BuildProblemDetailsResult = {
      success: false,
      error: {
        reason: "MISSING_FIELD",
        missingFields: missingDetails,
        partialProblem,
      },
    };

    return problemFailure;
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

  return { success: true, problem };
};
