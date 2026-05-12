import type { PartialProblem, RequiredProblemDetailField } from "shared";

const getMissingFields = (
  problem: PartialProblem,
): RequiredProblemDetailField[] => {
  const missingFields: RequiredProblemDetailField[] = [];

  const keys = Object.keys(problem);

  for (const key of keys) {
    const value = problem[key as keyof PartialProblem];
    if (value instanceof Array && value.length === 0) {
      missingFields.push(key as RequiredProblemDetailField);
    } else if (!value) missingFields.push(key as RequiredProblemDetailField);
  }

  return missingFields;
};

export { getMissingFields };
