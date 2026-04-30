import { TrendingUp, Trophy } from "lucide-react";
import { RANK_THRESHOLDS, type ReadinessStatus, type Rank } from "shared";

import XpBar from "./XpBar";

interface SidebarHeaderProps {
  rank: Rank;
  rankThreshold: (typeof RANK_THRESHOLDS)[keyof typeof RANK_THRESHOLDS];
  xpAmount: number;
  readinessPercentage: number;
  readinessStatus: ReadinessStatus;
}

const SidebarHeader = ({
  rank,
  rankThreshold,
  xpAmount,
  readinessPercentage,
  readinessStatus,
}: SidebarHeaderProps) => {
  return (
    <div className="section">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-elevated-surface flex items-center justify-center">
          <Trophy
            className="w-5 h-5 text-secondary-foreground"
            strokeWidth={2}
          />
        </div>
        <div>
          <div className="text-strong-sm">{rank}</div>
          <div className="text-secondary-foreground text-xs">{`${xpAmount} / ${rankThreshold} XP`}</div>
        </div>
      </div>

      <div className="mb-3">
        <XpBar value={xpAmount} max={rankThreshold} size="md" />
      </div>

      {/* Readiness Status */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-accent" strokeWidth={2} />
          <span className="text-strong-sm">{`${readinessPercentage}% Ready`}</span>
        </div>
        <span className="text-secondary-foreground text-xs">
          {readinessStatus}
        </span>
      </div>
    </div>
  );
};

export default SidebarHeader;
