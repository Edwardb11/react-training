import { Stack, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";

const MUITextField = () => {
  const [values, setValues] = useState("");
  return (
    <div>
      <Stack spacing={4}>
        <Stack direction="row" spacing={2}>
          <TextField label="Outlined" variant="outlined" />
          <TextField label="Filled" variant="filled" />
          <TextField label="Standard" variant="standard" />
        </Stack>
        <Stack direction="row" spacing={2}>
          <TextField label="samall secondary" size="small" color="secondary" />
        </Stack>
        <Stack direction="row" spacing={2}>
          <TextField
            label="Form input"
            required
            value={values}
            onChange={(e) => setValues(e.target.value)}
            helperText={!values ?'Required': 'Do not share your password"'}

          />
          <TextField
            label="password"
            type="password"
            helperText="Do not share your password"
            disabled
          />
          <TextField label="readOnly" inputProps={{ readOnly: true }} />
        </Stack>{" "}
        <Stack direction="row" spacing={2}>
          <TextField
            label="Amount"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
          <TextField
            label="Weitgh"
            InputProps={{
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            }}
          />
        </Stack>
      </Stack>
    </div>
  );
};

export default MUITextField;
