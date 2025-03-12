import { CircleChart } from "./components/ChartHeroUi";
import LineChartCard from "./components/LineChartCard";

export const Start = () => {
  return (
    <section className="w-full grid gap-3">
      <LineChartCard />
      <article className="grid grid-cols-1 md:grid-cols-3 gap-4 w-[1100px]">
        <CircleChart
          title="Traffic Sources"
          color="primary"
          categories={["Electrónica", "Alimentos", "Ropa", "Hogar"]}
          chartData={[
            { name: "Electrónica", value: 500 },
            { name: "Alimentos", value: 400 },
            { name: "Ropa", value: 300 },
            { name: "Hogar", value: 200 },
          ]}
          onSelectTimeRange={range => console.log("Selected range:", range)}
          onMenuAction={action => console.log("Action:", action)}
        />
        <CircleChart
          title="Traffic Sources"
          color="warning"
          categories={["Group A", "Group B", "Group C", "Group D"]}
          chartData={[
            { name: "Group A", value: 400 },
            { name: "Group B", value: 300 },
            { name: "Group C", value: 300 },
            { name: "Group D", value: 200 }
          ]}
          onSelectTimeRange={range => console.log("Selected range:", range)}
          onMenuAction={action => console.log("Action:", action)}
        />
        <CircleChart
          title="Traffic Sources"
          color="danger"
          categories={["Group A", "Group B", "Group C", "Group D"]}
          chartData={[
            { name: "Group A", value: 400 },
            { name: "Group B", value: 300 },
            { name: "Group C", value: 300 },
            { name: "Group D", value: 200 }
          ]}
          onSelectTimeRange={range => console.log("Selected range:", range)}
          onMenuAction={action => console.log("Action:", action)}
        />
      </article>
    </section>
  );
};
