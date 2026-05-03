import { formatTimer } from "../lib/utils";

interface VerticalTimerProps {
  seconds: number;
}

const VerticalTimer = ({ seconds: totalSeconds }: VerticalTimerProps) => {
  const { minutes, seconds } = formatTimer(totalSeconds, "vertical") as {
    minutes: number;
    seconds: number;
  };

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="text-foreground text-lg font-jetbrains-mono tracking-tight">
        <div className="text-center">{minutes}</div>
        <div className="text-center text-secondary-foreground text-xs">:</div>
        <div className="text-center">{seconds}</div>
      </div>
    </div>
  );
};

export default VerticalTimer;
