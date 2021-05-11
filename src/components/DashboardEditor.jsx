import React, { useState, useEffect } from "react";
import Chart from "react-google-charts";
import RGL, { WidthProvider } from "react-grid-layout";
import "../styles/react-grid-styles.css";
import "../styles/react-resizable-styles.css";
import ChartWrapper from "./ChartWrapper";

const ReactGridLayout = WidthProvider(RGL);

export default function DashboardEditor(props) {
  const { charts } = props;
  const [layout, setLayout] = useState([]);
  const [resizeToggle, setResizeToggle] = useState(false);
  const [newDataGrid, setNewDataGrid] = useState({
    x: 0,
    y: 0,
    h: 0,
    w: 0,
  });

  const handleResize = () => {
    setResizeToggle((prev) => !prev);
    console.log(resizeToggle);
  };

  const getLayout = () => {
    const layoutArray = charts.map((chart) => chart.datagrid);
    console.log(layoutArray);
  };

  useEffect(() => {
    if (charts.length) {
      getLayout();
    }
  }, [charts]);

  return (
    <ReactGridLayout
      style={{
        minHeight: "100%",
        maxHeight: "100%",
        minWidth: "100%",
        maxWidth: "100%",
      }}
      layout={layout}
      compactType={"vertical"}
      // autoSize={false}
      preventCollision
      rowHeight={50}
      cols={10}
      rows={10}
      // items={charts.length}
      isBounded
      onResizeStop={handleResize}
    >
      {charts.map((chart, index) => {
        // console.log(chart);
        return (
          <div
            style={{
              border: "1px solid black",
              backgroundColor: "white",
            }}
            key={`${chart.options.title} ${index}`}
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
