import { RootState } from "@/entities/store";
import { createSelector } from "@reduxjs/toolkit";

export const selectProducts = (state: RootState) => state.productsReducer.products;
export const selectProductsByNew = createSelector([selectProducts], (clothes) =>
  clothes.filter((clothes) => clothes.isNew)
);
export const selectProductsByPopular = createSelector(
  [selectProducts],
  (products) => products.filter((product) => product.popular)
);
