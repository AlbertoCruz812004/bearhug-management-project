import Component from "./components/CircleChart";
import { SimpleLineChart } from "./components/SimpleLineChart";

export const Start = () => {
  return (
    <section className="w-full grid gap-3">
      <SimpleLineChart />
      <article className="">
        <Component />
      </article>
    </section>
  );
};
