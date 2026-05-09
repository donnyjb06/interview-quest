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

export type { HeadLinkConfig, Example };
