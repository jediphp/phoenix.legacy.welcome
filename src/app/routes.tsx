import { createBrowserRouter } from "react-router";
import { Home } from "./components/Home";
import { PresentationFlow } from "./components/PresentationFlow";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/:type",
    Component: PresentationFlow,
  }
]);