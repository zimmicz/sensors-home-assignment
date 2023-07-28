import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import invariant from "tiny-invariant";
import { sensors } from "./data/sensors";
import { Detail } from "./views/detail/detail";
import { Overview } from "./views/overview/overview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Overview />,
  },
  {
    path: "/sensors/:id",
    element: <Detail />,
    loader: ({ params }) => {
      invariant(params.id, "id is required");
      const sensor = sensors.find((sensor) => sensor.id === params.id);

      if (!sensor) {
        throw redirect("/");
      }

      return sensor;
    },
  },
]);

const Routes = () => <RouterProvider router={router} />;

export { Routes };
