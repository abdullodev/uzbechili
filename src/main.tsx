import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { QueryClientProvider } from "react-query";
import { queryClient } from "./services/client/query.config.ts";

import "./index.css";
import { GlobalContextProvider } from "./context/useGlobal.tsx";

import "./react-i18next.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalContextProvider>
        <App />
      </GlobalContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
