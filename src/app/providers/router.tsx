import { CartPage } from "@/pages/cart-page/cart-page";
import { CatalogPage } from "@/pages/catalog-page/catalog-page";
import { HomePage } from "@/pages/home-page/home-page";
import { NotFoundPage } from "@/pages/not-found-page/not-found-page";
import { ProductPage } from "@/pages/product-page/product-page";
import { FC } from "react";
import { Route, Routes } from "react-router";

export const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/clothes/:id" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};
