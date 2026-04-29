import {
  Trophy,
  TrendingUp,
  MessageCircle,
  Code2,
  Zap,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

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
        {/* Header / Progress Area */}
        <div className="section">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-elevated-surface flex items-center justify-center">
              <Trophy
                className="w-5 h-5 text-secondary-foreground"
                strokeWidth={2}
              />
            </div>
            <div>
              <div className="text-strong-sm">Bronze Brain</div>
              <div className="text-secondary-foreground text-xs">
                620 / 800 XP
              </div>
            </div>
          </div>

          {/* XP Progress Bar */}
          <div className="mb-3">
            <div className="h-2 bg-surface rounded-full overflow-hidden">
              <div
                className="h-full bg-accent rounded-full transition-all"
                style={{ width: "77.5%" }}
              />
            </div>
          </div>

          {/* Readiness Status */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-accent" strokeWidth={2} />
              <span className="text-strong-sm">78% Ready</span>
            </div>
            <span className="text-secondary-foreground text-xs">
              Heating Up
            </span>
          </div>
        </div>

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

        {/* Timer Card */}
        <div className="section">
          <div className="card p-6">
            <div className="text-center">
              <div className="eyebrow mb-2">Elapsed Time</div>
              <div className="text-foreground text-4xl font-jetbrains-mono">
                12:34
              </div>
            </div>
          </div>
        </div>

        {/* Results Area */}
        <div className="p-6 flex-1">
          {/* Overall Score */}
          <div className="card p-6 mb-4">
            <div className="text-center">
              <div className="eyebrow mb-2">Overall Score</div>
              <div className="text-foreground text-5xl font-bold">
                82
                <span className="text-secondary-foreground text-2xl">/100</span>
              </div>
            </div>
          </div>

          {/* Breakdown */}
          <div className="space-y-3 mb-6">
            <div className="card p-4">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <MessageCircle
                    className="w-4 h-4 text-accent"
                    strokeWidth={2}
                  />
                  <span className="text-strong-sm">Communication</span>
                </div>
                <span className="text-strong-sm">85</span>
              </div>
              <div className="h-1.5 bg-elevated-surface rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent rounded-full"
                  style={{ width: "85%" }}
                />
              </div>
            </div>

            <div className="card p-4">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-accent" strokeWidth={2} />
                  <span className="text-strong-sm">Technical Alignment</span>
                </div>
                <span className="text-strong-sm">79</span>
              </div>
              <div className="h-1.5 bg-elevated-surface rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent rounded-full"
                  style={{ width: "79%" }}
                />
              </div>
            </div>
          </div>

          {/* Feedback */}
          <div className="mb-6">
            <div className="text-strong-sm mb-3">Key Feedback</div>
            <div className="space-y-2.5">
              <div className="flex gap-2">
                <div className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                <p className="text-muted-sm leading-relaxed">
                  Strong explanation of time complexity and clear reasoning
                  throughout
                </p>
              </div>
              <div className="flex gap-2">
                <div className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                <p className="text-muted-sm leading-relaxed">
                  Consider discussing edge cases earlier in your approach
                </p>
              </div>
              <div className="flex gap-2">
                <div className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                <p className="text-muted-sm leading-relaxed">
                  Good use of examples to validate solution correctness
                </p>
              </div>
            </div>
          </div>

          {/* Follow-up Questions */}
          <div className="mb-6">
            <div className="text-strong-sm mb-3">Follow-up Questions</div>
            <div className="space-y-2">
              <div className="card p-3">
                <p className="text-muted-sm">
                  How would you optimize for memory usage?
                </p>
              </div>
              <div className="card p-3">
                <p className="text-muted-sm">
                  What if the input size exceeded memory limits?
                </p>
              </div>
              <div className="card p-3">
                <p className="text-muted-sm">
                  Can you achieve this with O(1) space complexity?
                </p>
              </div>
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
