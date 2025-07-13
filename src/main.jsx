import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./routes/App.jsx";
import Home from "./routes/Home.jsx";
import ErrorPage from "./ErrorPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./routes/Login.jsx";
import Dashboard from "./routes/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
