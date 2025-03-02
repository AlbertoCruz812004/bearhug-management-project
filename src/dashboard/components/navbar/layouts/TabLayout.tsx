import { ReactNode } from "react"

interface Props {
  icon: ReactNode,
  text: string
}

export const TabLayout = ({ icon, text }: Props) => {
  return (
    <div className="flex items-center space-x-2 px-3">
      {icon}
      <span>{text}</span>
    </div>
  )
}
