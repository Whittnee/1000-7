import { TProduct } from "@/shared/types/products";


export type TCartClothes = Omit<
  TProduct,
  "sizes" | "colors" | "description" | "category"
> & {
  size: string;
  color: string;
  quantity: number;
};

export type TCartResponse = {
  products: TCartClothes[];
  totalPrices: {
    subtotal: number;
    total: number;
    discount: number;
    deliveryFee: number;
  };
}

export type TCartUpdate = {
  userId: string;
  productId: number;
}
