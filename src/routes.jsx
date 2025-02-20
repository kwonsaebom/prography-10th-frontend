import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Layout = lazy(() => import("@components/Layout"));

const MainPage = lazy(() => import("@pages/MainPage"));
const AboutPage = lazy(() => import("@pages/AboutPage"));
const ProjectPage = lazy(() => import("@pages/ProjectPage"));
const ContactPage = lazy(() => import("@pages/ContactPage"));
const ApplyAgreePage = lazy(() => import("@pages/ApplyAgreePage"));
const ApplyProfilePage = lazy(() => import("@pages/ApplyProfilePage"));
const ApplyPartPage = lazy(() => import("@pages/ApplyPartPage"));
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
        children: [
          { index: true, element: <ApplyAgreePage /> },
          { path: "/apply/profile", element: <ApplyProfilePage /> },
          { path: "/apply/part", element: <ApplyPartPage /> },
          { path: "/apply/result", element: <ApplyResultPage /> },
        ],
      },
    ],
  },
]);

export default router;
