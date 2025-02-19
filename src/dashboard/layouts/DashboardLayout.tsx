import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

export const DashboardLayout = ({ children }: Props) => {
  return (
    <main className="grid grid-cols-slice ">
      {children}
    </main>
  )
}
