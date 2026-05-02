import { Zap } from "lucide-react";

interface XpReinforcementCardProps {
  xpAmount: number;
}

const XpReinforcementCard = ({ xpAmount }: XpReinforcementCardProps) => {
  return (
    <div className="card p-3 flex items-center justify-center gap-2">
      <Zap
        className="w-4 h-4 text-accent"
        strokeWidth={2}
        fill="currentColor"
      />
      <span className="text-strong-sm">+{xpAmount} XP</span>
    </div>
  );
};

export default XpReinforcementCard;
