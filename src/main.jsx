import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./routes/App.jsx";
import Home from "./routes/Home.jsx";
import ErrorPage from "./ErrorPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./routes/Login.jsx";
import Dashboard from "./routes/Dashboard.jsx";
import Connect from "./routes/Connect.jsx";
import Connecting from "./routes/Connecting.jsx";

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
        path: "/connect",
        element: <Connect />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/connecting",
        element: <Connecting />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
