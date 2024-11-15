import "../../index.css";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout.tsx";
import { Home } from "../pages/home.tsx";
import { ErrorBoundary } from "../pages/errorBoundary.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
