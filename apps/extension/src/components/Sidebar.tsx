import { MessageCircle, Code2, Zap, ChevronRight } from "lucide-react";
import { useState } from "react";
import SidebarHeader from "./SidebarHeader";
import { RANK_THRESHOLDS } from "shared";
import TimerCard from "./TimerCard";
import ScoreCard from "./ScoreCard";
import ScoreBreakdownCard from "./ScoreBreakdownCard";
import KeyFeedback from "./KeyFeedback";
import { mockAttempt } from "../mocks/attempt.mock";
import FollowUpCard from "./FollowUpCard";

function ExtensionSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const isSessionActive = true; // This would come from your session state

  return (
    <div
      className={`fixed right-0 top-0 h-screen bg-background border-l border-border flex flex-col overflow-hidden transition-all duration-300 ${
        isCollapsed ? "w-[64px]" : "w-[380px]"
      }`}
    >
      {/* Toggle Button - positioned on the right edge */}
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

      {/* Collapsed State Content */}
      {isCollapsed && (
        <div className="flex flex-col items-center pt-20 px-2 gap-6">
          {/* Session State Indicator */}
          <div className="flex items-center justify-center">
            <div
              className={`w-2 h-2 rounded-full ${
                isSessionActive ? "bg-error" : "bg-border"
              }`}
            />
          </div>

          {/* Timer - Vertical Format */}
          <div className="flex flex-col items-center gap-1">
            <div className="text-foreground text-lg font-jetbrains-mono tracking-tight">
              <div className="text-center">12</div>
              <div className="text-center text-secondary-foreground text-xs">
                :
              </div>
              <div className="text-center">34</div>
            </div>
          </div>
        </div>
      )}

      {/* Sidebar Content */}
      <div
        className={`flex flex-col h-full overflow-y-auto transition-opacity duration-300 ${
          isCollapsed ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <SidebarHeader
          rank="Unranked"
          rankThreshold={RANK_THRESHOLDS.lockedIn}
          xpAmount={50}
          readinessPercentage={29}
          readinessStatus="Cold"
        />
        {/* Session Controls */}
        <div className="section space-y-3">
          <button className="action-button bg-success hover:bg-success-hover text-white">
            Start Session
          </button>
          <button className="action-button bg-accent hover:bg-muted-accent active:bg-accent-active text-white">
            Analyze Attempt
          </button>
          <button className="action-button bg-transparent hover:bg-error/8 text-error card-border">
            End Session
          </button>
        </div>

        <TimerCard seconds={65} />

        <div className="p-6 flex-1">
          <ScoreCard attemptScore={74} />

          <div className="space-y-3 mb-6">
            <ScoreBreakdownCard
              metric="Communication"
              score={85}
              Icon={MessageCircle}
            />
            <ScoreBreakdownCard
              metric="Technical Alignment"
              score={79}
              Icon={Code2}
            />
          </div>

          <div className="mb-6">
            <div className="flex flex-col gap-4">
              <KeyFeedback
                heading="Strong Points"
                listContent={mockAttempt.results?.strongPoints}
              />
              <KeyFeedback
                heading="Weak Points"
                listContent={mockAttempt.results?.weakPoints}
              />
            </div>
          </div>

          {/* Follow-up Questions */}
          <div className="mb-6">
            <h2 className="text-strong-sm mb-3">Follow-up Questions</h2>
            <div className="space-y-2">
              {mockAttempt.followUps?.map((followup) => (
                <FollowUpCard content={followup.question} />
              ))}
            </div>
          </div>

          {/* XP Reinforcement */}
          <div className="card p-3 flex items-center justify-center gap-2">
            <Zap
              className="w-4 h-4 text-accent"
              strokeWidth={2}
              fill="currentColor"
            />
            <span className="text-strong-sm">+120 XP</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExtensionSidebar;
