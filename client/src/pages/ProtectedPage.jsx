import React from "react";
import Protected from "../components/Protected/Protected"
import { Grid } from "@mui/material";

const ProtectedPage = () => {

  return (
    <>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Protected />
        </Grid>
      </Grid>
    </>
  );
};

export default ProtectedPage;
