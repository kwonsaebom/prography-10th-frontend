import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Layout /> },
  { path: "/about", element: <AboutPage /> },
]);
