import { Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import Chart from "react-google-charts";

export default function ChartPreview({ options, type, data }) {
  return (
    <Chart
      chartType={type || "BarChart"}
      loader={<div>Loading Chart</div>}
      data={data}
      options={options}
      legendToggle={false}
    />
  );
}
