const minutesToPixels = (minute: number) => minute * 0.8

// 24 = Height of title
const lengthToPadding = (length: number) => minutesToPixels(length) - 24
const startToTranslate = (start: number) => minutesToPixels(start)

interface EventBubbleProps {
  title: string
  start: number
  end: number
}

export const EventBubble = ({ title, start, end }: EventBubbleProps) => {
  const length = end - start
  return (
    <div className="pl-2 ml-11 absolute">
      <div
        className="bg-blue-300 opacity-75 text-black flex-grow rounded pl-1 pr-12"
        style={{ marginTop: `${startToTranslate(start)}px`, paddingBottom: `${lengthToPadding(length)}px`}}
      >
        {title}
      </div>
    </div>
  )
}
