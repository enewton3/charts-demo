import { Button, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import ChartOptions from "./ChartOptions";
import ChartPreview from "./ChartPreview";

//MUI Styles
const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    "&:hover": { backgroundColor: theme.palette.primary.dark },
  },
}));

export default function ChartEdit(props) {
  const { type, setType, data, addChart } = props;

  //MUI Styles
  const classes = useStyles();

  //Chart Options object - passed down and reset in Options component, used to render chart in ChartPreview
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

  return (
    <>
      <Button
        className={classes.button}
        onClick={() => {
          const chart = { options: options, data: data, type: type };
          addChart(chart);
        }}
      >
        Add
      </Button>
      <ChartOptions
        options={options}
        setOptions={setOptions}
        type={type}
        setType={setType}
      />

      <ChartPreview data={data} options={options} type={type} />
    </>
  );
}
