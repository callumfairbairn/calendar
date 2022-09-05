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
    // Setting grid-cols-2 here only allows for two side by side events - this should be dynamic
    <div className="pl-2 ml-11 absolute grid grid-cols-2" style={{ width: "90%" }}>
      {/*
        Conditionally rendering these divs is a really hacky way to shift events into the right column
        I don't like how I did this, and with more time I would figure out a better way
      */}
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
