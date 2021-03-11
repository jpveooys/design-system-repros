import React from 'react'
import {
  Timeline,
  TimelineDays,
  TimelineMonths, TimelineRows,
  TimelineTodayMarker,
  TimelineWeeks
} from "@royalnavy/react-component-library";

import { Main } from '../../layouts'


const ExampleTimeline = () => (
  <Timeline
    startDate={new Date(2020, 9, 5)}
    endDate={new Date(2021, 1, 1)}
    unitWidth={53}
  >
    <TimelineTodayMarker />
    <TimelineMonths />
    <TimelineWeeks />
    <TimelineDays />
    <TimelineRows>{}</TimelineRows>
  </Timeline>
)

export const Home: React.FC<unknown> = () => (
  <Main>
    <h1>Hello, World!</h1>
    <ExampleTimeline />
  </Main>
)
