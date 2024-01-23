import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { QueryClientProvider } from "react-query";
import { queryClient } from "./services/client/query.config.ts";

import { GlobalContextProvider } from "./context/useGlobal.tsx";
import "./index.css";

import "./react-i18next.js";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <GlobalContextProvider>
          <App />
        </GlobalContextProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
