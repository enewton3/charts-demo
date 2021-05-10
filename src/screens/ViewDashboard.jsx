import React from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import "../styles/react-grid-styles.css";
import "../styles/react-resizable-styles.css";
import data from "../data/SampleDashboard.json";

const GridLayout = WidthProvider(RGL);

export default function ViewDashboard({ charts }) {
  console.log(data);

  return (
    <GridLayout>
      {charts.map((chart, index) => {
        return (
          <div
            style={{
              border: "1px solid black",
              backgroundColor: "white",
            }}
            key={`${chart.options.title} ${index}`}
          >
            <Chart
              width={chart.options.width}
              height={chart.options.height}
              chartType={chart.type || "BarChart"}
              loader={<div>Loading Chart</div>}
              data={chart.data}
              options={chart.options}
              legendToggle={false}
            />
          </div>
        );
      })}
    </GridLayout>
  );
}
