import { RootState } from "@/entities/store";

export const selectCart = (state: RootState) => state.cartReducer.clothes;
export const selectCartClothesById = (id: number) => (state: RootState) =>
  state.cartReducer.clothes.find((clothes) => clothes.id === id);
export const selectCartTotalPrices = (state: RootState) =>
  state.cartReducer.totalPrices;
export const selectIsLoadingCart = (state: RootState) =>
  state.cartReducer.isLoading;