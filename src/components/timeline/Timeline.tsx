import React from "react";
import "./timeline.css";

export function Timeline({ children }: { children: React.ReactNode }) {
  return (
    <div className="timeline">
      <ol>{children}</ol>
    </div>
  );
}

export function TimelineItem({ children }: { children: React.ReactNode }) {
  return <li className="timeline-item">{children}</li>;
}

export function TimelineContent({ children }: { children: React.ReactNode }) {
  return <div className="timeline-content">{children}</div>;
}

export function TimelineDot() {
  return (
    <div className="timeline-dot">
      <div />
    </div>
  );
}

export function TimelineTime({ children }: { children: React.ReactNode }) {
  return <div className="timeline-time">{children}</div>;
}
