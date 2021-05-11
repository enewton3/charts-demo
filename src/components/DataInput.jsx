import { Button, MenuItem, Select, TextField } from "@material-ui/core";
import React from "react";

export default function DataInput(props) {
  const { fetchData, command, setCommand, commandType, setCommandType } = props;

  return (
    <>
      <TextField
        label="Cmd String"
        onChange={(e) => {
          setCommand(e.target.value);
        }}
        value={command}
      />
      <Select
        value={commandType}
        onChange={(e) => {
          setCommandType(e.target.value);
        }}
      >
        <MenuItem value={"query"}>Query</MenuItem>
        <MenuItem value={"subr"}>Subr</MenuItem>
      </Select>
      <Button
        onClick={() => {
          fetchData(command, commandType);
        }}
      >
        Make Call
      </Button>
    </>
  );
}
