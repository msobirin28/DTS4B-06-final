import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import HomeNews from "./containers/HomeNews";
import DetailNews from "./containers/DetailNews";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<HomeNews />} />
      <Route path="detailnews/:uuid" element={<DetailNews />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
