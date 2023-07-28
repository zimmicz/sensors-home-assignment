import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Overview } from "./views/overview/overview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Overview />,
  },
  {
    path: "/sensors/:id",
    element: <div>About</div>,
  },
]);

const Routes = () => <RouterProvider router={router} />;

export { Routes };
