interface ScoreCardProps {
  attemptScore: number;
}

const ScoreCard = ({ attemptScore }: ScoreCardProps) => {
  const isInvalidScore = attemptScore > 100;

  return (
    <div className="card p-6 mb-4">
      <div className="text-center">
        <div className="eyebrow mb-2">Overall Score</div>
        {isInvalidScore ? (
          <span className="text-error text-2xl font-bold">Invalid Score</span>
        ) : (
          <div className="text-foreground text-5xl font-bold">
            {attemptScore}
            <span className="text-secondary-foreground text-2xl">/100</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScoreCard;
