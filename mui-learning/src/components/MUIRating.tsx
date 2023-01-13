import { Rating, Stack } from "@mui/material";
import React from "react";
import { useState } from "react";
import Person2Icon from "@mui/icons-material/Person2";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
const MUIRating = () => {
  const [value, setValue] = useState<number | null>(null);
  const handleChange = (
    _ev: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setValue(newValue);
  };
  console.log(value);
  return (
    <Stack spacing={2}>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size="large"
        icon={<Person2Icon fontSize="inherit" color="error" />}
        emptyIcon={<InsertEmoticonIcon fontSize="inherit" />}
        // readOnly
      />
    </Stack>
  );
};

export default MUIRating;
