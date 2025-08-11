import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import CardContainer from "./Components/CardContainer";
import About from "./Components/About";
import Contact from "./Components/Contact";
import NotFoundPage from "./Components/NotFoundPage";
//import Cart from "./Components/Cart";
import RestaurantMenu from "./Components/RestaurantMenu";
import "./index.css";
import Shimmer from "./Components/shimmer";
import { lazy, Suspense } from "react";

// Lazy loading the Cart component
const Cart = lazy(() => import("./Components/Cart"));

// Correct usage
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <CardContainer /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Cart />
          </Suspense>
        ),
      },
      { path: "*", element: <NotFoundPage /> },
      { path: "/restaurant/menu/:resId", element: <RestaurantMenu /> },
    ],
    errorElement: <NotFoundPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
