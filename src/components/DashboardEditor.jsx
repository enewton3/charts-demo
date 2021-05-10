import React, { useState, useEffect } from "react";
import Chart from "react-google-charts";
import RGL, { WidthProvider } from "react-grid-layout";
import "../styles/react-grid-styles.css";
import "../styles/react-resizable-styles.css";

const ReactGridLayout = WidthProvider(RGL);

export default function DashboardEditor(props) {
  const { charts } = props;
  const [layout, setLayout] = useState([]);
  const [resizeToggle, setResizeToggle] = useState(false);

  //Generate Layout array for Grid layout from Charts array based on either previously saved layout, or default values
  const generateLayout = () => {
    const layout = charts.map((item, i) => {
      console.log(item);
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
        isBounded: true,
      };
    });
    return layout;
  };

  //Generate Layout on rerender
  useEffect(() => {
    setLayout(generateLayout());
  }, [charts]);

  const handleResize = () => {
    setResizeToggle((prev) => !prev);
  };

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
    </ReactGridLayout>
  );
}
