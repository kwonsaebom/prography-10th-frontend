import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Layout = lazy(() => import("@components/Layout"));

const MainPage = lazy(() => import("@pages/MainPage"));
const AboutPage = lazy(() => import("@pages/AboutPage"));
const ProjectPage = lazy(() => import("@pages/ProjectPage"));
const ContactPage = lazy(() => import("@pages/ContactPage"));
const ApplyFirstPage = lazy(() => import("@pages/ApplyFirstPage"));
const ApplySecondPage = lazy(() => import("@pages/ApplySecondPage"));
const ApplyThirdPage = lazy(() => import("@pages/ApplyThirdPage"));
const ApplyResultPage = lazy(() => import("@pages/ApplyResultPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/project", element: <ProjectPage /> },
      { path: "/contact", element: <ContactPage /> },
      {
        path: "/apply",
        element: <ApplyFirstPage />,
        children: [
          { path: "/apply/second", element: <ApplySecondPage /> },
          { path: "/apply/third", element: <ApplyThirdPage /> },
          { path: "/apply/result", element: <ApplyResultPage /> },
        ],
      },
    ],
  },
]);

export default router;
