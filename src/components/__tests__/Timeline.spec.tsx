import React from "react";
import { render, screen } from "@testing-library/react";
import {
  Timeline,
  TimelineItem,
  TimelineDot,
  TimelineTime,
  TimelineContent,
} from "../timeline/Timeline";

test("renders a timeline correctly", () => {
  render(
    <Timeline data-testid="timeline">
      <TimelineItem>
        <TimelineDot />
        <TimelineTime>11:30</TimelineTime>
        <TimelineContent>
          Get access to over 20+ pages including a dashboard layout, charts,
          kanban board, calendar, and pre-order E-commerce & Marketing pages.
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  ); 

  const timeline = screen.getByTestId("timeline");
  expect(timeline).toMatchSnapshot();
});
