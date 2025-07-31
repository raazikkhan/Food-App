import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import About from "./Components/About";
import Contact from "./Components/Contact";
import NotFoundPage from "./Components/NotFoundPage";
import "./index.css";

// Correct usage
const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <NotFoundPage /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
