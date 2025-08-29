import { checkResponse } from "@/shared/api";
import { API_URL } from "@/shared/config/env";
import { TProduct, TSlicedProduct } from "@/shared/types/products";


export const getProducts = async (): Promise<TSlicedProduct[]> => {
  const res = await fetch(`${API_URL}/products`);
  return checkResponse<TSlicedProduct[]>(res);
};

export const getProduct = async (productId: number): Promise<TProduct> => {
  const res = await fetch(`${API_URL}/products/${productId}`);
  return checkResponse<TProduct>(res);
};