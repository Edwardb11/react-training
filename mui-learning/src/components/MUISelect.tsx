import { Box, TextField, MenuItem } from "@mui/material";
import React from "react";
import { useState } from "react";

const MUISelect = () => {
  const [conrty, setContry] = useState<string[]>([]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setContry(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <Box width="250px">
      <TextField
        fullWidth
        label="select contry"
        select
        value={conrty}
        size="medium"
        color='secondary'
        helperText='please select your contry'
        SelectProps={{
          multiple: true,
        }}
        onChange={handleChange}>
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="Do">Dominicana</MenuItem>
        <MenuItem value="US">USA</MenuItem>
      </TextField>
    </Box>
  );
};

export default MUISelect;
