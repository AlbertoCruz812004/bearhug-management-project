import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

export const DashboardLayout = ({ children }: Props) => {
  return (
    <main className="p-3">
      {children}
    </main>
  )
}
