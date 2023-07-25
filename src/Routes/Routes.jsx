import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Income from "../pages/Income";
import Expenses from "../pages/Expenses";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/income",
        element: <Income></Income>,
      },
      {
        path: "/expenses",
        element: <Expenses></Expenses>,
      },
    ],
  },
]);

export default router;
