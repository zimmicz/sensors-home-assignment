import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { Sensor } from "../../components";
import { sensors } from "../../data/sensors";

const Overview = () => {
  return (
    <>
      {sensors.map((sensor) => (
        <Grid item xs="auto" key={sensor.id}>
          <Sensor
            sensor={sensor}
            actions={
              <Button
                component={Link}
                to={`/sensors/${sensor.id}`}
                variant="contained"
                sx={{ marginLeft: "auto" }}
              >
                Sensor detail
              </Button>
            }
          />
        </Grid>
      ))}
    </>
  );
};

export { Overview };
