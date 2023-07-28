import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { sensors } from "../../data/sensors";

const Overview = () => {
  return (
    <Grid m={5} container spacing={4}>
      {sensors.map((sensor) => (
        <Grid item xs="auto" key={sensor.id}>
          <Card sx={{ maxWidth: "450px", padding: "1rem" }}>
            <CardContent>
              <Typography variant="h4">{sensor.name}</Typography>
              <Typography variant="body1">{sensor.description}</Typography>
            </CardContent>
            <CardActions>
              <Button
                component={Link}
                to={`/sensors/${sensor.id}`}
                variant="contained"
                sx={{ marginLeft: "auto" }}
              >
                Sensor detail
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export { Overview };
