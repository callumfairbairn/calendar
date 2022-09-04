const lengthToPadding = (length: number) => length / 15

interface EventBubbleProps {
  title: string
  length: number
}

export const EventBubble = ({ title, length }: EventBubbleProps) => {
  return (
    <div className="z-1 grid grid-cols-12 gap-2 pl-2">
      <div className="col-span-1" />
      <div className={`col-span-11 ${title && "bg-blue-300"} opacity-50 text-black flex-grow rounded pb-${lengthToPadding(length)}`}>
        {title || "Placeholder"}
      </div>
    </div>
  )
}
