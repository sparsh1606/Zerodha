import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/Apps";
import Home from "./components/Home";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<Home />} />
    </Routes>
  </BrowserRouter>
);
