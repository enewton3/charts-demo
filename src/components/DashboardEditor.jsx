import React, { useState } from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import "../styles/react-grid-styles.css";
import "../styles/react-resizable-styles.css";
import ChartWrapper from "./ChartWrapper";

const ReactGridLayout = WidthProvider(RGL);

export default function DashboardEditor(props) {
  const { charts, setCharts } = props;
  const [toggle, setToggle] = useState(false);

  const handleChange = (oldItem, newItem) => {
    //Toggle state change for resize rerender
    setToggle((prev) => !prev);
    //This is logging so I don't get errors from react and can deploy eventually...
    console.log(toggle);

    const chartI = oldItem.i.split(" ")[0];

    //get the chart to update from charts state using the value in i in either item.
    //this has an index associated with it, so split it and grab the first value. There's probably a better way to do this.
    const updateChart = charts.filter((item) => item.datagrid.i === chartI)[0];

    //grab the newItems position and size and set that in the updateChart
    const { x, y, h, w } = newItem;
    updateChart.datagrid.x = x;
    updateChart.datagrid.y = y;
    updateChart.datagrid.h = h;
    updateChart.datagrid.w = w;

    //save that updated chart into the charts state using the index of the updateChart in charts and a shallow copy
    const updateChartIndex = charts.findIndex((el) => el.datagrid.i === chartI);
    const newCharts = [...charts];
    newCharts.splice(updateChartIndex, 1, updateChart);
    setCharts(newCharts);
  };

  return (
    <ReactGridLayout
      style={{
        minHeight: "100%",
        maxHeight: "100%",
        minWidth: "100%",
        maxWidth: "100%",
      }}
      // layout={layout}
      compactType={"vertical"}
      preventCollision
      rowHeight={50}
      cols={10}
      rows={10}
      maxRows={10}
      isBounded
      onResizeStop={(layout, oldItem, newItem, placeholder, e, element) => {
        // console.log("layout", layout);
        // console.log("oldItem", oldItem);
        // console.log("newItem", newItem);
        // console.log("placeholder", placeholder);
        // console.log("e", e);
        // console.log("element", element);
        handleChange(oldItem, newItem);
      }}
      onDragStop={(layout, oldItem, newItem, placeholder, e, element) => {
        handleChange(oldItem, newItem);
      }}
    >
      {charts.map((chart, index) => {
        // console.log(chart);
        return (
          <div
            style={{
              border: "1px solid black",
              backgroundColor: "white",
            }}
            key={`${chart.datagrid.i} ${index}`}
            data-grid={{ ...chart.datagrid }}
          >
            <ChartWrapper
              chartQuery={chart.data}
              options={chart.options}
              chartType={chart.type}
            />
          </div>
        );
      })}
    </ReactGridLayout>
  );
}
