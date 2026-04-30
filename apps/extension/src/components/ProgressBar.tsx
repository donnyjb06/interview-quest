interface ProgressBarProps {
  max: number;
  value: number;
  size: "sm" | "md";
}

export default function ProgressBar({ max, value, size }: ProgressBarProps) {
  const percentage =
    max <= 0 ? 0 : Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div
      className={`h-${size === "sm" ? "1.5" : "2"} bg-surface rounded-full overflow-hidden`}
    >
      <div
        className="h-full bg-accent rounded-full transition-all"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
