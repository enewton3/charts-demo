import {
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  formControl: {
    width: "90%",
  },
}));

const typeOptions = [
  "Annotation Chart",
  "Area Chart",
  "Bar Chart",
  "Bubble Chart",
  "Calendar",
  "Candlestick Chart",
  "Column Chart",
  "Combo Chart",
  "Diff Chart",
  "Donut Chart",
  "Gantt",
  "Gauge",
  "Geo Chart",
  "Histogram",
  "Line Chart",
  "Line",
  "Bar",
  "Map",
  "Org Chart",
  "Pie Chart",
  "Sankey",
  "Scatter Chart",
  "SteppedArea Chart",
  "Table",
  "Timeline",
  "TreeMap",
  "Waterfall Chart",
  "Word Tree",
];

export default function ChartOptions(props) {
  const { options, setOptions, type, setType } = props;
  const classes = useStyles();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOptions((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNestedChange = (e, parentobj) => {
    const { name, value } = e.target;

    setOptions((prev) => {
      return {
        ...prev,
        [parentobj]: { ...prev[parentobj], [name]: value },
      };
    });
  };

  const handleLegendCheck = () => {
    setOptions((prev) => {
      const prevLegend = prev.legend;

      const newLegend = prevLegend === "none" ? "" : "none";

      return {
        ...prev,
        legend: newLegend,
      };
    });
  };

  const handleTypeChange = (e) => {
    const { value } = e.target;
    setType(value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="type-label">Type Select</InputLabel>
        <Select labelId="type-label" value={type} onChange={handleTypeChange}>
          {typeOptions.map((item) => (
            <MenuItem value={item.split(" ").join("")} key={`${item} select`}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControlLabel
        control={
          <Checkbox
            checked={options.legend === "none" ? false : true}
            // value={options.legend}
            onChange={handleLegendCheck}
            name="legend"
          />
        }
        label="Legend?"
      />

      <FormControl className={classes.formControl}>
        <TextField
          label="Chart Title"
          name="title"
          value={options.title}
          onChange={handleChange}
        />
        <TextField
          label="X Axis Title"
          name="title"
          value={options.hAxis.title}
          onChange={(e) => handleNestedChange(e, "hAxis")}
        />
        <TextField
          label="Y Axis Title"
          name="title"
          value={options.vAxis.title}
          onChange={(e) => handleNestedChange(e, "vAxis")}
        />
      </FormControl>
    </div>
  );
}
