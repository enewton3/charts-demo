import { Typography } from "@material-ui/core";
import React from "react";
import Chart from "react-google-charts";

export default function ChartPreview({ options, type, data }) {
  return (
    <div style={{ paddingTop: "3vh" }}>
      <Typography>Chart Preview</Typography>
      <Chart
        width={400}
        height={300}
        chartType={type || "BarChart"}
        loader={<div>Loading Chart</div>}
        data={data}
        options={options}
        legendToggle={false}
      />
    </div>
  );
}
