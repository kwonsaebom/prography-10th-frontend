import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Layout = lazy(() => import("@components/Layout"));

const HomePage = lazy(() => import("@pages/HomePage"));
const AboutPage = lazy(() => import("@pages/AboutPage"));
const ProjectPage = lazy(() => import("@pages/ProjectPage"));
const ContactPage = lazy(() => import("@pages/ContactPage"));
const ApplyPage = lazy(() => import("@pages/ApplyPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/project", element: <ProjectPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/apply", element: <ApplyPage /> },
    ],
  },
]);

export default router;
