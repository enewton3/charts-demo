import {
  Button,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { getData } from "../services/apiCalls";
import ChartOptions from "./ChartOptions";
import ChartPreview from "./ChartPreview";
import DataInput from "./DataInput";

const useStyles = makeStyles((theme) => ({
  dataInput: {
    width: "60%",
    border: "2px solid red",
  },
  commandInput: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    border: "1px solid green",
  },
  options: {
    // width: "40%",
    border: "2px solid yellow",
  },
  preview: {
    width: "40%",
    border: "2px solid green",
  },
  previewHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  chart: {
    height: "90%",
  },
}));

export default function ChartCreation({ addChart }) {
  const classes = useStyles();
  const [data, setData] = useState([
    ["City", "2010 Population", "2000 Population"],
    ["New York City, NY", 8175000, 8008000],
    ["Los Angeles, CA", 3792000, 3694000],
    ["Chicago, IL", 2695000, 2896000],
    ["Houston, TX", 2099000, 1953000],
    ["Philadelphia, PA", 1526000, 1517000],
  ]);
  const [type, setType] = useState("BarChart");
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
    legend: "none",
  });
  const [command, setCommand] = useState("");
  const [commandType, setCommandType] = useState("query");

  const defaultDataGrid = {
    h: 2,
    w: 2,
    x: 0,
    y: 0,
    maxH: 5,
    maxW: 5,
    minH: 3,
    minW: 3,
    i: options.title.split(" ").join(""),
  };

  const fetchData = async (cmd, type) => {
    console.log(cmd, type);
    const resp = await getData(cmd, type);
    setData(resp);
  };

  return (
    <>
      <div className={classes.dataInput}>
        <div className={classes.commandInput}>
          <DataInput
            fetchData={fetchData}
            command={command}
            setCommand={setCommand}
            commandType={commandType}
            setCommandType={setCommandType}
          />
        </div>
        <div className={classes.options}>
          <ChartOptions
            type={type}
            setType={setType}
            options={options}
            setOptions={setOptions}
          />
        </div>
      </div>
      <div className={classes.preview}>
        <div className={classes.previewHeader}>
          <Typography>Chart Preview</Typography>
          <Button
            onClick={() =>
              addChart({
                title: options.title,
                options: options,
                datagrid: defaultDataGrid,
                type: type,
                data: { type: commandType, cmd: command },
              })
            }
          >
            Add
          </Button>
        </div>

        <div className={classes.chart}>
          <ChartPreview options={options} type={type} data={data} />
        </div>
      </div>
    </>
  );
}
