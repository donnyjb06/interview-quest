interface FollowUpCardProps {
  content: string;
}

const FollowUpCard = ({ content }: FollowUpCardProps) => {
  return (
    <div className="card p-3">
      <p className="text-muted-sm">{content}</p>
    </div>
  );
};

export default FollowUpCard;
