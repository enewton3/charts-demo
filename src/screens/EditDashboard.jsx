import { Button, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ChartCreation from "../components/ChartCreation";
import DashboardEditor from "../components/DashboardEditor";
import DashboardSelect from "../components/DashboardSelect";
import { getData } from "../services/apiCalls";

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
    height: "60%",
  },
  saved: {
    border: "2px solid black",
    width: "70%",
  },
  editHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  select: {
    width: "30%",
    border: "2px solid hotpink",
  },
  bottomSection: {
    width: "100%",
    height: "40%",
    display: "flex",
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

  const [dashboardCharts, setDashboardCharts] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (currentDashboard.tiles) {
      setDashboardCharts(currentDashboard.tiles);
    }
  }, [currentDashboard]);

  const addChart = (newChart) => {
    setDashboardCharts((prev) => [...prev, newChart]);
  };

  return (
    <div className={classes.root}>
      <div className={classes.topSection}>
        <div className={classes.saved}>
          <div className={classes.editHeader}>
            {currentDashboard.name ? (
              <div>***{currentDashboard.name}***</div>
            ) : (
              <div></div>
            )}
            <Button>Save</Button>
          </div>
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
        <ChartCreation addChart={addChart} />
      </div>
    </div>
  );
}
