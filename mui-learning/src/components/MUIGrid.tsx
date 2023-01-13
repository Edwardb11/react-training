import { Box, Stack, Divider, Grid } from "@mui/material";
import React from "react";

const MUIGrid = () => {
  return (
    <Grid container my={4} spacing={2} columnSpacing={6}>
      <Grid item>
        <Box bgcolor="primary.light" p={2}>
          item 1
        </Box>
      </Grid>
      <Grid item>
        <Box bgcolor="primary.light" p={2}>
          item 2
        </Box>
      </Grid>
      <Grid item>
        <Box bgcolor="primary.light" p={2}>
          item 3
        </Box>
      </Grid>
      <Grid item>
        <Box bgcolor="primary.light" p={2}>
          item 4
        </Box>
      </Grid>
    </Grid>
  );
};

export default MUIGrid;
