import { Button, makeStyles, Select } from "@material-ui/core";
import React, { useState } from "react";
import Draggable from "react-draggable";
import ChartOptions from "../components/ChartOptions";
import ChartPreview from "../components/ChartPreview";
import DataInput from "../components/DataInput";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    left: "10vw",
    display: "flex",
    flexFlow: "column wrap",
    width: "90vw",
    height: "100vh",
  },
  topSection: { display: "flex", height: "20%" },
  saved: {
    border: "2px solid black",
    width: "50%",
  },
  select: {
    width: "50%",
    border: "2px solid hotpink",
  },
  bottomSection: {
    width: "100%",
    height: "80%",
    display: "flex",
  },
  dataInput: {
    width: "60%",
    border: "2px solid red",
  },
  options: {
    width: "40%",
    border: "2px solid yellow",
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    "&:hover": { backgroundColor: theme.palette.primary.dark },
  },
}));

export default function EditDashboard() {
  const classes = useStyles();
  const [data, setData] = useState([
    ["City", "2010 Population", "2000 Population"],
    ["New York City, NY", 8175000, 8008000],
    ["Los Angeles, CA", 3792000, 3694000],
    ["Chicago, IL", 2695000, 2896000],
    ["Houston, TX", 2099000, 1953000],
    ["Philadelphia, PA", 1526000, 1517000],
  ]);
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
  });
  const [type, setType] = useState("");

  return (
    <div className={classes.root}>
      <div className={classes.topSection}>
        <div className={classes.saved}>Dashboard showing saved charts</div>
        <div className={classes.select}>Dashboard Select</div>
      </div>
      <div className={classes.bottomSection}>
        <div className={classes.dataInput}>
          <DataInput data={data} setData={setData} />
          <Draggable>
            <div>Drag Me!</div>
          </Draggable>
        </div>
        <div className={classes.options}>
          <Button className={classes.button}>Add</Button>
          <ChartOptions
            options={options}
            setOptions={setOptions}
            type={type}
            setType={setType}
          />

          <ChartPreview data={data} options={options} type={type} />
        </div>
      </div>
    </div>
  );
}
