import {
  FormControl,
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
  "Area Chart",
  "Bar Chart",
  "Bubble Chart",
  "Calendar",
  "Candlestick Chart",
  "Combo Chart",
  "Gantt",
  "Geo Chart",
  "Histogram",
  "Line Chart",
  "Pie Chart",
  "Scatter Chart",
  "Stepped Area Chart",
  "Table",
  "Timeline",
  "TreeMap",
  "Word Tree",
];

export default function ChartOptions({ options, setOptions, type, setType }) {
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
