import { type LucideIcon } from "lucide-react";
import ProgressBar from "./ProgressBar";

interface ScoreBreakdownCardProps {
  metric: string;
  score: number;
  Icon: LucideIcon;
}
const ScoreBreakdownCard = ({
  metric,
  score,
  Icon,
}: ScoreBreakdownCardProps) => {
  return (
    <div className="card p-4">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4 text-accent" strokeWidth={2} />
          <span className="text-strong-sm">{metric}</span>
        </div>
        <span className="text-strong-sm">{score}</span>
      </div>
      <ProgressBar value={score} max={100} size="sm" />
    </div>
  );
};

export default ScoreBreakdownCard;
