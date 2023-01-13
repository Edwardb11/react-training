import { Box, FormControlLabel, Switch } from "@mui/material";
import React from "react";
import { useState } from "react";

const MUISwitch = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };
  console.log(checked);
  return (
    <Box>
      <FormControlLabel
        control={
          <Switch checked={checked} onChange={handleChange} color="success" />
        }
        label="Dark  Mode"
      />
    </Box>
  );
};

export default MUISwitch;
