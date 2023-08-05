import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main.jsx";
import Home from "../pages/Home.jsx";
import ProductDetails from "../pages/ProductDetails.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
        loader: async ({ params }) => {
          return fetch(`https://fakestoreapi.com/products/${params.id}`);
        },
      },
    ],
  },
]);
