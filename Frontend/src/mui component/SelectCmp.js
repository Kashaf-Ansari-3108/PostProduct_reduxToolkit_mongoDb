import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const SelectCmp = ({ optionObj, label, onChange }) => {
  return (
    <>
      <TextField
        id="outlined-select-currency"
        select
        label={label}
        onChange={onChange}
      >
        {optionObj.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
};

export default SelectCmp;
