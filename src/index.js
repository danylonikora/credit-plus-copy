import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/index.scss";
import locales from "./locales";

const root = createRoot(document.getElementById("react-root"));
const language =
  locales.getInterfaceLanguage().slice(0, 2) === "ru" ? "ru" : "uk";

root.render(
  <BrowserRouter basename="credit-plus-copy">
    <App language={language} />
  </BrowserRouter>
);
