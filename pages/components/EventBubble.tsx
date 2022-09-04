const minutesToPixels = (minute: number) => minute * 0.8

// - 2 from the calculated height to create a small gap between consecutive events
const lengthToHeight = (length: number) => minutesToPixels(length) - 2
const startToTranslate = (start: number) => minutesToPixels(start)

interface EventBubbleProps {
  title: string
  start: number
  end: number
  row: number
}

export const EventBubble = ({ title, start, end, row }: EventBubbleProps) => {
  const length = end - start
  return (
    <div className="pl-2 ml-11 absolute grid grid-cols-2" style={{ width: "90%" }}>
      {row > 0 ? <div/> : null}
      {row > 1 ? <div/> : null}
      <div
        className="bg-blue-300 opacity-75 text-black flex-grow rounded wr-12 ml-0.5 text-xs"
        style={{
          marginTop: `${startToTranslate(start)}px`,
          height: `${lengthToHeight(length)}px`,
        }}
      >
        {title}
      </div>
    </div>
  )
}
