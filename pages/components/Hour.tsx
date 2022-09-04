interface HourProps {
  children: string
}

export const Hour = ({ children }: HourProps) => {
  return (
    <div className="flex gap-2 h-[3rem]">
      <div className="text-right w-min">
        {children}
      </div>
      <div className="flex-grow border-t border-gray-400 mt-3" />
    </div>
  )
}
