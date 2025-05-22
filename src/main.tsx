import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GlobalStyle } from "./GlobalStyle.tsx";
import { RouterProvider } from "react-router";
import { appRouter } from "./appRouter.tsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
    <ToastContainer />
    <GlobalStyle />
  </StrictMode>
);
