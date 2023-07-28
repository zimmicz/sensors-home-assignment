import { Box, Button, Grid } from "@mui/material";
import { Link, useLoaderData } from "react-router-dom";
import { Sensor } from "../../components";
import { sensors } from "../../data/sensors";
import "ol/ol.css";
import { RMap, ROSM, RLayerVector, RFeature, ROverlay, RStyle } from "rlayers";
import { fromLonLat } from "ol/proj";
import { Point } from "ol/geom";

const Detail = () => {
  const sensor = useLoaderData() as (typeof sensors)[number];

  return (
    <Grid container direction="column">
      <Sensor
        sensor={sensor}
        actions={
          <Button
            component={Link}
            to="/"
            variant="contained"
            sx={{ marginLeft: "auto" }}
          >
            Back to overview
          </Button>
        }
      />
      <Box mt={8} sx={{ "& .map": { width: "500px", height: "500px" } }}>
        <RMap
          className="map"
          initial={{ center: fromLonLat(sensor.coordinates), zoom: 11 }}
        >
          <ROSM />
          <RLayerVector zIndex={10}>
            <RStyle.RStyle>
              <RStyle.RCircle radius={5}>
                <RStyle.RFill color="blue" />
              </RStyle.RCircle>
            </RStyle.RStyle>
            <RFeature
              geometry={new Point(fromLonLat(sensor.coordinates))}
            ></RFeature>
          </RLayerVector>
        </RMap>
      </Box>
    </Grid>
  );
};

export { Detail };
