import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./components/router/routes";
import { createTheme, MantineProvider } from "@mantine/core";
import "./styles/global.css";
import "normalize.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

const theme = createTheme({});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <MantineProvider theme={theme} defaultColorScheme="dark">
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </MantineProvider>,
);
