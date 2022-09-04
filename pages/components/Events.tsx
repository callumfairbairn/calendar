import { EventBubble } from "./EventBubble";

interface Event {
  id: string
  title: string
  start: number
  end: number
}

export const constructEventList = (events: Event[], dayStart: number, dayEnd: number) => {
  if (events.length === 0) {
    return [{ start: dayStart, end: dayEnd }]
  }

  // Assume that events are sorted by start time
  const eventsWithGaps = []
  let endOfLastEvent = dayStart

  events.forEach((event, index) => {
    const isGapSinceLastEvent = event.start > endOfLastEvent
    if (isGapSinceLastEvent) {
      eventsWithGaps.push([{ start: endOfLastEvent, end: event.start }])
    }

    eventsWithGaps.push([event])
    endOfLastEvent = event.end
  })

  return eventsWithGaps
}

interface EventsProps {
  events: Event[]
}

export const Events = ({ events }: EventsProps) => {
  const eventList = constructEventList(events, 420, 1200)
  console.log(eventList, events);
  return (
    <div className="absolute inset-0 py-7">
      {eventList.map(({ id, title, start, end }: Event) =>
        <EventBubble key={id || `empty-${start}`} title={title} length={end - start} />
      )}
    </div>
  )
}
