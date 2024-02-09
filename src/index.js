import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { GlobalStyle } from "./styles/global";
import { AuthContextProvider } from "./contexts/AuthContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <BrowserRouter>
      <App />
      <GlobalStyle />
    </BrowserRouter>
  </AuthContextProvider>
);
