import { createBrowserRouter } from "react-router";
import { LandingPage } from "./components/LandingPage";
import { SurveyPage } from "./components/SurveyPage";
import { DashboardPage } from "./components/DashboardPage";
import { JobDetailPage } from "./components/JobDetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/survey",
    Component: SurveyPage,
  },
  {
    path: "/dashboard",
    Component: DashboardPage,
  },
  {
    path: "/job/:jobId",
    Component: JobDetailPage,
  },
]);
