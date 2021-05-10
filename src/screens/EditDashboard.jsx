import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import ChartEdit from "../components/ChartEdit";
import DashboardEditor from "../components/DashboardEditor";
import DashboardSelect from "../components/DashboardSelect";
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
  topSection: {
    display: "flex",
    height: "50%",
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
    height: "50%",
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

  const [type, setType] = useState("");
  const [dashboards, setDashboards] = useState([
    "CEO Dashboard",
    "Regional Sales Dashboard",
    "MV System Dashboard",
    "My Personal Dashboard",
    "Audit Dashboard",
  ]);

  const [dashboardCharts, setDashboardCharts] = useState([]);

  const addChart = (newChart) => {
    setDashboardCharts((prev) => [...prev, newChart]);
  };

  return (
    <div className={classes.root}>
      <div className={classes.topSection}>
        <div className={classes.saved}>
          {/* Dashboard showing saved charts */}
          <DashboardEditor charts={dashboardCharts} />
        </div>
        <div className={classes.select}>
          <DashboardSelect dashboards={dashboards} />
        </div>
      </div>
      <div className={classes.bottomSection}>
        <div className={classes.dataInput}>
          <DataInput data={data} setData={setData} type={type} />
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
