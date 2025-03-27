import { RootState } from "@/entities/store";
import { createSelector } from "@reduxjs/toolkit";

export const selectClothes = (state: RootState) => state.clothesReducer.clothes;
export const selectClothesByNew = createSelector([selectClothes], (clothes) =>
  clothes.filter((clothes) => clothes.isNew)
);
export const selectClothesByPopular = createSelector(
  [selectClothes],
  (clothes) => clothes.filter((clothes) => clothes.popular)
);
