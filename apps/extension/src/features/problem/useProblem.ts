import { useEffect, useState } from "react";
import { type Problem } from "shared";
import { buildProblemDetails } from "../../content/problem/buildProblemDetails";

export const useProblem = (pathName: string = window.location.pathname) => {
  const [problem, setProblem] = useState<Problem | null>(null);

  useEffect(() => {
    const tryExtraction = () => {
      const problemDetails = buildProblemDetails(pathName);
      if (problemDetails) {
        setProblem(problemDetails);
        return true;
      }

      return false;
    };

    const isProblemExtracted = tryExtraction();
    if (isProblemExtracted) return;

    const documentObserver = new MutationObserver(() => {
      const isProblemExtracted = tryExtraction();
      if (isProblemExtracted) documentObserver.disconnect();
    });

    documentObserver.observe(document.body, {
      subtree: true,
      childList: true,
    });

    return () => documentObserver.disconnect();
  }, []);

  return problem;
};
