import React, { Component, useState } from "react";
import Chart from "react-google-charts";

export default function Editor() {
  const [chartEditor, setChartEditor] = useState(null);
  const [chartWrapper, setChartWrapper] = useState(null);
  const [google, setGoogle] = useState(null);
  const [type, setType] = useState("");
  const [options, setOptions] = useState({
    title: "",
    chartArea: {},
    hAxis: {
      title: "",
      minValue: 0,
    },
    vAxis: {
      title: "",
    },
    height: "100%",
    width: "100%",
    legend: "",
  });
  const [data, setData] = useState([
    ["City", "2010 Population", "2000 Population"],
    ["New York City, NY", 8175000, 8008000],
    ["Los Angeles, CA", 3792000, 3694000],
    ["Chicago, IL", 2695000, 2896000],
    ["Houston, TX", 2099000, 1953000],
    ["Philadelphia, PA", 1526000, 1517000],
  ]);

  return (
    <div>
      <button
        onClick={() => {
          if (chartWrapper === null || google === null || chartEditor === null)
            return;
          chartEditor.openDialog(chartWrapper);
          google.visualization.events.addListener(chartEditor, "ok", () => {
            const newChartWrapper = chartEditor.getChartWrapper();
            newChartWrapper.draw();
            const newChartOptions = newChartWrapper.getOptions();
            const newChartType = newChartWrapper.getChartType();
            console.log("Chart type changed to ", newChartType);
            setType(newChartType);
            console.log("Chart options changed to ", newChartOptions);
            setOptions({ newChartOptions, height: "100%", width: "100%" });
          });
        }}
      >
        Edit data
      </button>
      <Chart
        width={"100%"}
        height={"100%"}
        chartType="ScatterChart"
        loader={<div>Loading Chart</div>}
        data={data}
        options={options}
        rootProps={{ "data-testid": "1" }}
        getChartEditor={({ chartEditor, chartWrapper, google }) => {
          setChartEditor(chartEditor);
          setChartWrapper(chartWrapper);
          setGoogle(google);
          console.log("Get Chart Editor");
        }}
        chartPackages={["corechart", "controls", "charteditor"]}
      />
    </div>
  );
}
