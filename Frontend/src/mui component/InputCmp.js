import React from "react";
import TextField from "@mui/material/TextField";

const InputCmp = ({ label, onChange, value, type }) => {
  return (
    <>
      <TextField 
        autoFocus
        value={value}
        onChange={onChange}
        color="success"
        label={label ? label : "Text Field"}
        variant="outlined"
        fullWidth
        type={type}
      />
    </>
  );
};

export default InputCmp;
