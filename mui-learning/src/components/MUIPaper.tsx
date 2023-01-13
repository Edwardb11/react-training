import { Box, Stack, Divider, Paper } from "@mui/material";
import React from "react";

const MUIPaper = () => {
  return (
    <Paper elevation={2} sx={{ padding: '32px' }}>
      <Stack
        sx={{ border: "1px solid" }}
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}>
        <Box
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            width: 100,
            height: 100,
            padding: "16px",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}>
          Hello
        </Box>
        <Box
          display="flex"
          height="100px"
          width="100px"
          bgcolor="success.light"
          p={2}>
          Hello
        </Box>
      </Stack>
    </Paper>
  );
};

export default MUIPaper;
