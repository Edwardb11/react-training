import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import { useState } from "react";
const MUIRadioButton = () => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  alert(value);
  return (
    <Box>
      <FormControl>
        <FormLabel>Years of experience</FormLabel>
        <RadioGroup name="job-experience" value={value} onChange={handleChange} row>
          <FormControlLabel control={<Radio size="medium" />} label="0-2" value="0-2" />
          <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
          <FormControlLabel control={<Radio />} label="6-10" value="6-10" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default MUIRadioButton;
