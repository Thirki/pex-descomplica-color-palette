import { createBrowserRouter } from "react-router";
import { PalettePage } from "./Pages";

export const appRouter = createBrowserRouter([
  {
    path: "/palette/:colors",
    element: <PalettePage />,
  },
]);
