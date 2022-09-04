interface HourProps {
  children: string
}

export const Hour = ({ children }: HourProps) => {
  return <div className="grid grid-cols-12 gap-2 py-2 -z-1">
    <div className="col-span-1 text-right">
      {children}
    </div>
    <div className="col-span-11 flex-grow border-t border-gray-400 mt-3" />
  </div>
}
