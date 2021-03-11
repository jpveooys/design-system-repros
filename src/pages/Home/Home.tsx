import {
  Timeline,
  TimelineDays,
  TimelineEvent,
  TimelineEvents,
  TimelineMonths,
  TimelineRow,
  TimelineRows,
  TimelineTodayMarker,
  useTimelinePosition
} from "@royalnavy/react-component-library";
import React from 'react'

import {Main} from '../../layouts'

const CustomComponent = () => {
  const date1 = new Date(2021, 0, 31)
  const date2 = new Date(2021, 0, 31, 12)

  const {startsAfterEnd: date1StartsAfterEnd} = useTimelinePosition(date1, date1)
  const {startsAfterEnd: date2StartsAfterEnd} = useTimelinePosition(date2, date2)

  // eslint-disable-next-line no-console
  console.log({date1StartsAfterEnd, date2StartsAfterEnd})

  return null
}


export const Home: React.FC<unknown> = () => (
  <Main>
    <h1>Hello, World!</h1>
    <Timeline
      startDate={new Date(2021, 0, 1)}
      range={1}
      today={new Date(2021, 0, 31, 12)}
    >
      <CustomComponent/>
      <TimelineTodayMarker />
      <TimelineMonths />
      <TimelineDays />
      <TimelineRows>
        <TimelineRow name="Row 1">
          <TimelineEvents>
            <TimelineEvent
              startDate={new Date(2021, 0, 31, 0, 0, 0)}
              endDate={new Date(2021, 1, 1, 18, 0, 0)}
            >
              Event 1
            </TimelineEvent>
          </TimelineEvents>
        </TimelineRow>
        <TimelineRow name="Row 1">
          <TimelineEvents>
            <TimelineEvent
              startDate={new Date(2021, 0, 31, 6, 0, 0)}
              endDate={new Date(2021, 1, 1, 18, 0, 0)}
            >
              Event 2
            </TimelineEvent>
          </TimelineEvents>
        </TimelineRow>
      </TimelineRows>
    </Timeline>
  </Main>
)
