import { Button } from "@mui/material";
import React from "react";

const ButtonCmp = ({ label, onClick }) => {
  return (
    <>
      <Button onClick={onClick} variant="contained" color="success">
        {label ? label : "Button"}
      </Button>
    </>
  );
};

export default ButtonCmp;
