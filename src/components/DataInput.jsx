import { Button, MenuItem, Select, TextField } from "@material-ui/core";
import React from "react";

export default function DataInput({ data, setData }) {
  const handleChange = (e) => {
    const { value } = e.target;
    // setData((prev) => ({
    //   ...prev,
    //   [name]: value,
    // }));
    setData(value);
  };

  return (
    <div>
      <TextField label="Cmd String" onChange={handleChange} />
      <Select>
        <MenuItem>Query</MenuItem>
        <MenuItem>Subr</MenuItem>
      </Select>
      <Button>Make Call</Button>
      {/* <TextField label="Column 2 label" />
      <TextField label="Column 3 label" />
      <TextField
        value={data}
        onChange={(e) => handleChange(e)}
        name="data"
        multiline
        fullWidth
        label="Copy data as a 2D Array here"
      /> */}
    </div>
  );
}
