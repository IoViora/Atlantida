import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AuthContextProvider from "./contexts/AuthContextProvider";
import ServiceContextProvider from "./contexts/ServiceContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <ServiceContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </ServiceContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
