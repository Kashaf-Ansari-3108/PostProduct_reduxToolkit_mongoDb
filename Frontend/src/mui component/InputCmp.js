import React from "react";
import TextField from "@mui/material/TextField";

const InputCmp = ({ label, onChange, value }) => {
  return (
    <>
      <TextField
        autoFocus
        value={value}
        onChange={onChange}
        id="outlined-basic"
        label={label ? label : "Text Field"}
        variant="outlined"
      />
    </>
  );
};

export default InputCmp;
