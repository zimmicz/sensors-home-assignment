import { Card, CardActions, CardContent, Typography } from "@mui/material";
import type { sensors } from "../data/sensors";

const Sensor = ({
  sensor,
  actions,
}: {
  sensor: (typeof sensors)[number];
  actions: React.ReactNode;
}) => {
  return (
    <Card sx={{ maxWidth: "450px", padding: "1rem" }}>
      <CardContent>
        <Typography variant="h4">{sensor.name}</Typography>
        <Typography variant="body1">{sensor.description}</Typography>
      </CardContent>
      <CardActions>{actions}</CardActions>
    </Card>
  );
};

export { Sensor };
