import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Pages/Home.tsx";
import About from "./Pages/About.tsx";
import Weather from "./Pages/Weather.tsx";
import AuthLogin from "./Pages/auth/AuthLogin.tsx";
import AuthRegister from "./Pages/auth/AuthRegister.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "weather", Component: Weather },
      {
        path: "auth",
        children: [
          { path: "login", Component: AuthLogin },
          { path: "register", Component: AuthRegister },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
