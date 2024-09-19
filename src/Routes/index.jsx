import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Collection } from "../pages/Collection";
import { About } from "../pages/About";
import { Contact_us } from "../pages/Contact_us";
import DashboardLayout from "../layout/DashboardLayout";
import { Products } from "../pages/Products";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout/>,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/collection",
        element: <Collection />,
      },
      {
        path: "/about",
        element: <About/>,
      },

      {
        path: "/contact-us",
        element: <Contact_us/>,
      },
      {
        path: "/product",
        element: <Products/>,
      },
    ],
  },
]);
export default Router;
