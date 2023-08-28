import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import AdminPage from "./pages/AdminPage";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/admin",
    element: <AdminPage />
  },
  {
    path: "/login",
    element: <Login />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
