interface XpBarProps {
  max: number;
  value: number;
}

export default function XpBar({ max, value }: XpBarProps) {
  const percentage =
    max <= 0 ? 0 : Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className="h-2 bg-surface rounded-full overflow-hidden">
      <div
        className="h-full bg-accent rounded-full transition-all"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
