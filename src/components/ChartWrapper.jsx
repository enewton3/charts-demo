import React, { useState, useEffect } from "react";
import Chart from "react-google-charts";
import { getData } from "../services/apiCalls";

export default function ChartWrapper(props) {
  const [data, setData] = useState([]);
  const { chartQuery, options, chartType } = props;
  console.log(props);
  const { type, cmd } = chartQuery;

  //make API CALL here to get updated chart data
  const fetchData = async (type, cmd) => {
    const resp = await getData(type, cmd);
    setData(resp);
    console.log(resp);
    return resp;
  };

  useEffect(() => {
    fetchData(type, cmd);
  }, []);

  return (
    <Chart
      data={
        //Data returned from API
        data
      }
      options={options}
      chartType={chartType}
    />
  );
}
