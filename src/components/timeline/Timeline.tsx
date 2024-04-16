import type { HtmlHTMLAttributes } from "react";
import "./timeline.css";

interface TimelinePrimitiveProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

interface TimelineItemProps extends HtmlHTMLAttributes<HTMLLIElement> {
  children: React.ReactNode;
}

export function Timeline({ children, ...props }: TimelinePrimitiveProps) {
  return (
    <div {...props} className="timeline">
      <ol>{children}</ol>
    </div>
  );
}

export function TimelineItem({ children, ...props }: TimelineItemProps) {
  return (
    <li {...props} className="timeline-item">
      {children}
    </li>
  );
}

export function TimelineContent({
  children,
  ...props
}: TimelinePrimitiveProps) {
  return (
    <div {...props} className="timeline-content">
      {children}
    </div>
  );
}

export function TimelineDot() {
  return (
    <div className="timeline-dot">
      <div />
    </div>
  );
}

export function TimelineTime({ children, ...props }: TimelinePrimitiveProps) {
  return <div {...props} className="timeline-time">{children}</div>;
}
