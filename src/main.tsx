import { Grid } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { Routes } from "./routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Grid m={5} container spacing={4}>
      <Routes />
    </Grid>
  </React.StrictMode>
);
