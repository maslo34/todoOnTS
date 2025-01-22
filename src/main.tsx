import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RoutesApp from "./routesApp.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RoutesApp />
  </StrictMode>
);
