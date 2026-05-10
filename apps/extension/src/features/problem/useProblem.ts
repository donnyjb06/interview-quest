import { useEffect, useState } from "react";
import { type Problem } from "shared";
import { buildProblemDetails } from "../../content/problem/buildProblemDetails";

export const useProblem = () => {
  const [problem, setProblem] = useState<Problem | null>(null);

  useEffect(() => {
    const tryExtraction = () => {
      const problemDetails = buildProblemDetails();
      if (problemDetails) {
        setProblem(problemDetails);
        return true;
      }

      return false;
    };

    if (tryExtraction()) return;

    const documentObserver = new MutationObserver(() => {
      if (tryExtraction()) documentObserver.disconnect();
    });

    documentObserver.observe(document.body, {
      subtree: true,
      childList: true,
    });

    return () => documentObserver.disconnect();
  }, []);

  return problem;
};
