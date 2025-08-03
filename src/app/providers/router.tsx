import { Layout } from "@/app/layout";
import { CartPage } from "@/pages/cart-page/ui/cart-page";
import { CatalogPage } from "@/pages/catalog-page/ui/catalog-page";
import { HomePage } from "@/pages/home-page/ui/home-page";
import { NotFoundPage } from "@/pages/not-found-page/ui/not-found-page";
import { ProductPage } from "@/pages/product-page/ui/product-page";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/catalog",
        element: <CatalogPage />,
      },
      {
        path: "/clothes/:id",
        element: <ProductPage/>
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
