import { formatTimer } from "../lib/utils";

interface TimerCardProps {
  seconds: number;
}

const TimerCard = ({ seconds }: TimerCardProps) => {
  const formattedTime = formatTimer(seconds, "horizontal") as string;

  return (
    <div className="section">
      <div className="card p-6">
        <div className="text-center">
          <div className="eyebrow mb-2">Elapsed Time</div>
          <div className="text-foreground text-4xl font-jetbrains-mono">
            {formattedTime}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimerCard;
