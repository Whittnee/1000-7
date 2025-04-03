import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import "./variables.scss";
import AppWithProviders from "@/app/app";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppWithProviders/>
  </StrictMode>
);
