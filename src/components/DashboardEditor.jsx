import React from "react";
import Draggable from "react-draggable";
import Chart from "react-google-charts";
import ReactGridLayout from "react-grid-layout";

export default function DashboardEditor(props) {
  const { charts } = props;

  return (
    <div>
      <ReactGridLayout>
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
      </ReactGridLayout>
    </div>
  );
}
