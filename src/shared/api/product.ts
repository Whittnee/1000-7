import { checkResponse } from "@/shared/api";
import { API_URL } from "@/shared/config/env";
import { TClothes } from "@/shared/types/clothes";


export const getProduct = async (productId: number): Promise<TClothes> => {
  const res = await fetch(`${API_URL}/products/${productId}`);
  return checkResponse<TClothes>(res);
};