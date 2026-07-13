import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import IntercepteurReseauConfidentialite from "./pages/IntercepteurReseauConfidentialite";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <IntercepteurReseauConfidentialite />
  </StrictMode>
);
