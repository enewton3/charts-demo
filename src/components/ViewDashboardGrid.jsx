import React, { useEffect, useState } from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import "../styles/react-grid-styles.css";
import "../styles/react-resizable-styles.css";
import Chart from "react-google-charts";
import ChartWrapper from "./ChartWrapper";

const GridLayout = WidthProvider(RGL);

export default function ViewDashboardGrid({ currentDashboard }) {
  const [layout, setLayout] = useState([]);
  const [resizeToggle, setResizeToggle] = useState(false);

  const generateLayout = () => {
    const layout = currentDashboard.tiles?.map((item, i) => {
      return {
        x: item.x || i * 2,
        y: item.y || i * 2,
        w: item.w || 3,
        h: item.h || 3,
        i: item.options.title,
        minW: 3,
        minH: 3,
        maxH: 5,
        maxW: 5,
        static: true,
      };
    });
    return layout;
  };

  //Generate Layout on rerender
  useEffect(() => {
    setLayout(generateLayout());
  }, [currentDashboard]);

  const handleResize = () => {
    setResizeToggle((prev) => !prev);
    console.log(resizeToggle);
  };

  const renderedComponents = currentDashboard.name ? (
    <>
      <div>{currentDashboard.name}</div>
      <GridLayout
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
        // isBounded
        onResizeStop={handleResize}
      >
        {currentDashboard.tiles?.map((chart, index) => {
          console.log(chart);
          return (
            <div
              x={chart.x}
              y={chart.y}
              w={chart.w}
              h={chart.h}
              style={{
                border: "1px solid black",
                backgroundColor: "white",
              }}
              key={`${chart.options.title} ${index}`}
            >
              <ChartWrapper
                chartQuery={chart.data}
                options={chart.options}
                chartType={chart.type}
              />
              {/* <Chart
                width={chart.options.width}
                height={chart.options.height}
                chartType={chart.type || "BarChart"}
                loader={<div>Loading Chart</div>}
                data={chart.data}
                options={chart.options}
                legendToggle={false}
              /> */}
            </div>
          );
        })}
      </GridLayout>
    </>
  ) : (
    <div>Please Select a Dashboard from the list to start</div>
  );

  return renderedComponents;
}
