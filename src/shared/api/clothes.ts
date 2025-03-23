import { checkResponse } from "@/shared/api";
import { TSlicedClothes } from "@/shared/types/clothes";
import { API_URL } from "@/shared/config/env";


export const getProducts = async (): Promise<TSlicedClothes[]> => {
  const res = await fetch(`${API_URL}/products`);
  return checkResponse<TSlicedClothes[]>(res);
};
