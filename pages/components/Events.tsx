import { EventBubble } from "./EventBubble";

const dayStart = 420

interface Event {
  id: string
  title: string
  start: number
  end: number
}

interface EventsProps {
  events: Event[]
}

export const Events = ({ events }: EventsProps) => {
  console.log(events);
  return (
    <div className="absolute inset-0 py-[20px]">
      {events.map(({ id, title, start, end }: Event) =>
        <EventBubble key={id} title={title} start={start - dayStart} end={end - dayStart} />
      )}
    </div>
  )
}
