import { makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ChartEdit from "../components/ChartEdit";
import DashboardEditor from "../components/DashboardEditor";
import DashboardSelect from "../components/DashboardSelect";
import DataInput from "../components/DataInput";
import Editor from "../components/Editor";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    left: "10vw",
    display: "flex",
    flexFlow: "column wrap",
    width: "90vw",
    height: "100vh",
  },
  topSection: {
    display: "flex",
    height: "30%",
  },
  saved: {
    border: "2px solid black",
    width: "70%",
  },
  select: {
    width: "30%",
    border: "2px solid hotpink",
  },
  bottomSection: {
    width: "100%",
    height: "70%",
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
}));

export default function EditDashboard(props) {
  const {
    dashboards,
    // setDashboards, use this later for creating new dasboards, and for managing adding new charts to dashboards state
    currentDashboard,
    handleDashboardSelect,
  } = props;
  const classes = useStyles();
  const [data, setData] = useState([
    ["City", "2010 Population", "2000 Population"],
    ["New York City, NY", 8175000, 8008000],
    ["Los Angeles, CA", 3792000, 3694000],
    ["Chicago, IL", 2695000, 2896000],
    ["Houston, TX", 2099000, 1953000],
    ["Philadelphia, PA", 1526000, 1517000],
  ]);

  const [type, setType] = useState("");

  const [dashboardCharts, setDashboardCharts] = useState([]);

  useEffect(() => {
    if (currentDashboard.tiles) {
      setDashboardCharts(currentDashboard.tiles);
    }
  }, [currentDashboard]);

  const addChart = (newChart) => {
    setDashboardCharts((prev) => [...prev, newChart]);
  };

  const fetchData = (cmd, type) => {};

  return (
    <div className={classes.root}>
      <div className={classes.topSection}>
        <div className={classes.saved}>
          {currentDashboard.name ? (
            <div>***{currentDashboard.name}***</div>
          ) : null}
          <DashboardEditor charts={dashboardCharts} />
        </div>
        <div className={classes.select}>
          <DashboardSelect
            dashboards={dashboards}
            handleDashboardSelect={handleDashboardSelect}
            currentDashboard={currentDashboard}
          />
        </div>
      </div>
      <div className={classes.bottomSection}>
        <div className={classes.dataInput}>
          <DataInput
            data={data}
            setData={setData}
            type={type}
            fetchData={fetchData}
          />
          {/* <Editor /> */}
        </div>
        <div className={classes.options}>
          <ChartEdit
            type={type}
            setType={setType}
            data={data}
            addChart={addChart}
          />
        </div>
      </div>
    </div>
  );
}
