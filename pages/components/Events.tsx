import { EventBubble } from "./EventBubble";

const dayStart = 420

interface Event {
  id: string
  title: string
  start: number
  end: number
}

interface EventWithRow extends Event {
  row: number
}

export const addRows = (events: Event[]): EventWithRow[] => events.reduce((eventsWithRows, currentEvent, index) => {
    if (index !== 0) {
    const previousEventEnd = eventsWithRows[index - 1].end
    if (currentEvent.start < previousEventEnd) {
      const previousEventRow = eventsWithRows[index - 1].row
      return [ ...eventsWithRows, { ...currentEvent, row: previousEventRow + 1 }]
    }
  }
  return [ ...eventsWithRows, { ...currentEvent, row: 0 }]
}, [])

interface EventsProps {
  events: Event[]
}

export const Events = ({ events }: EventsProps) => {
  return (
    <div className="absolute inset-0 py-[20px]">
      {addRows(events).map(({ id, start, end, ...rest }: EventWithRow) =>
        <EventBubble {...rest} key={id} start={start - dayStart} end={end - dayStart} />
      )}
    </div>
  )
}
