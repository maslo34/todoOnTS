import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import 'bootstrap/dist/css/bootstrap.min.css';

import RoutesApp from "./routesApp.tsx";
import { store }from "./slices/index.ts"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RoutesApp />
    </Provider>
  </StrictMode>
);
