import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";

const root = document.getElementById("root");

// Define your routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

// Render only RouterProvider — do NOT wrap with <BrowserRouter>
createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
