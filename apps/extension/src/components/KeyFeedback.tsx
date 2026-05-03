interface FeedbackListItemProps {
  content: string;
}

const FeedbackListItem = ({ content }: FeedbackListItemProps) => {
  return (
    <li className="flex gap-2">
      <div className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
      <p className="text-muted-sm leading-relaxed">{content}</p>
    </li>
  );
};

interface FeedbackListProps {
  listContent: string[];
}

const FeedbackList = ({ listContent }: FeedbackListProps) => {
  return (
    <ul className="space-y-2.5 list-none">
      {listContent.map((content) => (
        <FeedbackListItem content={content} />
      ))}
    </ul>
  );
};

interface KeyFeedbackProps {
  heading: string;
  listContent?: string[] | null;
}

const KeyFeedback = ({ heading, listContent }: KeyFeedbackProps) => {
  if (!listContent) return null;
  return (
    <div className="flex flex-col">
      <h2 className="text-strong-sm mb-3">{heading}</h2>
      <FeedbackList listContent={listContent} />
    </div>
  );
};

export default KeyFeedback;
