import { useEffect, useState } from "react";
import { type Problem } from "shared";
import { buildProblemDetails } from "../../content/problem/buildProblemDetails";
import { PROBLEM_EXTRACTION_TIMEOUT_MS } from "./problem.constants";
import type { ProblemExtractionStatus } from "../../lib/types";

export const useProblem = (pathName: string = window.location.pathname) => {
  const [problem, setProblem] = useState<Problem | null>(null);
  const [status, setStatus] = useState<ProblemExtractionStatus>("WAITING");
  const [retryKey, setRetryKey] = useState<number>(0);

  const retryExtraction = () => {
    setStatus("WAITING");
    setProblem(null);
    setRetryKey((prevKey) => prevKey + 1);
  };

  useEffect(() => {
    const tryExtraction = () => {
      const extractionResults = buildProblemDetails(pathName);
      if (extractionResults.success) {
        setStatus("SUCCESS");
        setProblem(extractionResults.problem);
        return true;
      }

      return false;
    };

    const isProblemExtracted = tryExtraction();
    if (isProblemExtracted) return;

    const documentObserver = new MutationObserver(() => {
      const isProblemExtracted = tryExtraction();
      if (isProblemExtracted) {
        documentObserver?.disconnect();
        clearTimeout(problemExtractionTimeout);
      }
    });

    documentObserver.observe(document.body, {
      subtree: true,
      childList: true,
    });

    const problemExtractionTimeout = setTimeout(() => {
      documentObserver.disconnect();
      const extractionResults = buildProblemDetails(pathName);
      if (!extractionResults.success) {
        setStatus("FAILED");
        return;
        // TODO: Handle the case where we fail to extract the problem after the timeout (e.g., show an error message or retry extraction)
      }

      setProblem(extractionResults.problem);
      setStatus("SUCCESS");
    }, PROBLEM_EXTRACTION_TIMEOUT_MS);

    return () => {
      documentObserver?.disconnect();
      clearTimeout(problemExtractionTimeout);
    };
  }, [pathName, retryKey]);

  return { problem, status, retryExtraction };
};
