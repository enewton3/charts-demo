import React from "react";
import Draggable from "react-draggable";
import Chart from "react-google-charts";
import ReactGridLayout, { WidthProvider } from "react-grid-layout";

const GridLayout = WidthProvider(ReactGridLayout);

export default function DashboardEditor(props) {
  const { charts } = props;

  return (
    <div>
      <GridLayout layout={charts.length}>
        {charts.map((chart, index) => (
          // <Draggable key={`Chart ${index}`}>
          <div>
            <Chart
              width={400}
              height={300}
              chartType={chart.type || "BarChart"}
              loader={<div>Loading Chart</div>}
              data={chart.data}
              options={chart.options}
              legendToggle={false}
            />
          </div>
          // </Draggable>
        ))}
      </GridLayout>
    </div>
  );
}
