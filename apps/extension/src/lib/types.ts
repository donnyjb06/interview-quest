type HeadLinkConfig = {
  href: string;
  rel: string;
  crossOrigin?: "anonymous";
};

type Example = {
  input: string;
  output: string;
  explanation: string | null;
};

type ProblemExtractionStatus = "WAITING" | "FAILED" | "SUCCESS";

export type { HeadLinkConfig, Example, ProblemExtractionStatus };
