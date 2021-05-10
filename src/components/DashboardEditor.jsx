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

  console.log(charts);

  const generateLayout = () => {
    const layout = charts.map((item, i) => {
      console.log(item);
      return {
        x: item.x || i * 2,
        y: item.y || i * 2,
        w: item.w || 2,
        h: item.h || 2,
        i: item.options.title,
        minW: 2,
        minH: 2,
        maxH: 5,
        maxW: 5,
        isBounded: true,
      };
    });
    return layout;
  };

  useEffect(() => {
    setLayout(generateLayout());
  }, [charts]);

  const handleResize = () => {
    setResizeToggle((prev) => !prev);
  };

  // const layout = [
  //   { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
  //   { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
  //   { i: "c", x: 4, y: 0, w: 1, h: 2 },
  // ];
  // return (
  //   <GridLayout
  //     className="layout"
  //     layout={layout}
  //     cols={12}
  //     rowHeight={30}
  //     width={1200}
  //   >
  //     <div key="a">a</div>
  //     <div key="b">b</div>
  //     <div key="c">c</div>
  //   </GridLayout>
  // );

  return (
    // <div>
    <ReactGridLayout
      style={{
        minHeight: "100%",
        maxHeight: "100%",
        minWidth: "100%",
        maxWidth: "100%",
      }}
      layout={layout}
      // compactType={"horizontal"}
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
        console.log(chart);
        return (
          <div
            style={{
              border: "1px solid black",
              backgroundColor: "white",
              // maxHeight: "400px",
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
    // </div>
  );
}
