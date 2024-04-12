import React from "react";
import "./App.css";
import {
  Timeline,
  TimelineItem,
  TimelineDot,
  TimelineTime,
  TimelineContent,
} from "./components/timeline/Timeline";


function App() {
  return (
    <div className="App" style={{ padding: "30px", width: '300px'}}>
      <Timeline>
        <TimelineItem>
          <TimelineDot />
          <TimelineTime>11:30</TimelineTime>
          <TimelineContent>
            Get access to over 20+ pages including a dashboard layout, charts,
            kanban board, calendar, and pre-order E-commerce & Marketing pages.
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineDot />
          <TimelineTime>11:30</TimelineTime>
          <TimelineContent>
            Get access to over 20+ pages including a dashboard layout, charts,
            kanban board, calendar, and pre-order E-commerce & Marketing pages.
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}

export default App;