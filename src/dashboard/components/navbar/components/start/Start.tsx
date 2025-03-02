import { CircleChartCard } from "./components/CircleChartCard"
import LineChartCard from "./components/LineChartCard"

export const Start = () => {
  return (
    <section className="w-full grid gap-3">
      <LineChartCard />
      <article className="flex justify-between w-[1000px]">
        <CircleChartCard />
        <CircleChartCard />
        <CircleChartCard />
      </article>
    </section>
  )
}
