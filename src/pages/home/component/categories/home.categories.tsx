import React from "react";
import { Grid } from "@mui/material";

const HomeCategories = () => {
  return (
    <div>
      <h2 className="text-center my-4">HomeCategories</h2>

      <Grid container>
        <Grid item md={4}>
          <h2>Category 1</h2>
        </Grid>
        <Grid item md={4}>
          <h2>Category 1</h2>
        </Grid>
        <Grid item md={4}>
          <h2>Category 1</h2>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomeCategories;
