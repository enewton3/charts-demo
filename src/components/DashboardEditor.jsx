import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import Chart from "react-google-charts";
import GridLayout, { WidthProvider } from "react-grid-layout";

// const GridLayout = WidthProvider(ReactGridLayout);

export default function DashboardEditor(props) {
  const { charts } = props;
  const [layout, setLayout] = useState([]);

  useEffect(() => {
    setLayout(generateLayout());
  }, [charts]);

  console.log(charts);

  const generateLayout = () => {
    return charts.map((item, index) => {
      console.log(item);

      return {
        x: item.x || 10,
        y: item.y || 10,
        w: item.options.width,
        h: item.options.height,
        i: index,
      };
    });
  };

  return (
    <div>
      <GridLayout layout={layout}>
        {charts.map((chart, index) => {
          // <Draggable key={`Chart ${index}`}>
          // <div>
          console.log(chart);
          return (
            <Chart
              width={chart.options.width}
              height={chart.options.height}
              chartType={chart.type || "BarChart"}
              loader={<div>Loading Chart</div>}
              data={chart.data}
              options={chart.options}
              legendToggle={false}
            />
            // </div>
            // </Draggable>
          );
        })}
      </GridLayout>
    </div>
  );
}
