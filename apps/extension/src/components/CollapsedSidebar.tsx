import VerticalTimer from "./VerticalTimer";

interface CollapsedSidebarProps {
  isSessionActive: boolean;
  timeElapsed: number;
}

const CollapsedSidebar = ({
  isSessionActive,
  timeElapsed,
}: CollapsedSidebarProps) => {
  return (
    <div className="flex flex-col items-center pt-20 px-2 gap-6">
      <div className="flex items-center justify-center">
        <div
          className={`w-2 h-2 rounded-full ${
            isSessionActive ? "bg-error" : "bg-border"
          }`}
        />
      </div>

      {/* Timer - Vertical Format */}
      <VerticalTimer seconds={timeElapsed} />
    </div>
  );
};

export default CollapsedSidebar;
