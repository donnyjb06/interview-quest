import { ChevronRight } from "lucide-react";
import { type Dispatch, type SetStateAction } from "react";

interface ChevronToggleProps {
  isCollapsed: boolean;
  setIsCollapsed: Dispatch<SetStateAction<boolean>>;
}

const ChevronToggle = ({ isCollapsed, setIsCollapsed }: ChevronToggleProps) => {
  return (
    <button
      onClick={() => setIsCollapsed(!isCollapsed)}
      className={`absolute top-6 z-10 w-10 h-10 flex items-center justify-center hover:bg-surface transition-colors rounded ${
        isCollapsed ? "left-1/2 -translate-x-1/2" : "right-4"
      }`}
      aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
    >
      <ChevronRight
        className={`w-5 h-5 text-secondary-foreground transition-transform duration-300 ${
          isCollapsed ? "rotate-180" : ""
        }`}
        strokeWidth={2}
      />
    </button>
  );
};

export default ChevronToggle;
