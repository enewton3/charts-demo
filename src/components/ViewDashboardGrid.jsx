import React, { useEffect, useState } from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import "../styles/react-grid-styles.css";
import "../styles/react-resizable-styles.css";
import ChartWrapper from "./ChartWrapper";

const GridLayout = WidthProvider(RGL);

export default function ViewDashboardGrid({ currentDashboard }) {
  // const [layout, setLayout] = useState([]);
  const [resizeToggle, setResizeToggle] = useState(false);

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
        compactType={"vertical"}
        preventCollision
        rowHeight={50}
        cols={10}
        rows={10}
        onResizeStop={handleResize}
      >
        {currentDashboard.tiles?.map((chart, index) => {
          return (
            <div
              data-grid={{
                ...chart.datagrid,
                static: true,
              }}
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
