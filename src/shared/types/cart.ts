import { TClothes } from "@/shared/types/clothes";


export type TCartClothes = Omit<
  TClothes,
  "sizes" | "colors" | "description" | "category"
> & {
  size: string;
  color: string;
  quantity: number;
};

export type TCartResponse = {
  clothes: TCartClothes[];
  totalPrices: {
    subtotal: number;
    total: number;
    discount: number;
    deliveryFee: number;
  };
}

export type TUpdateCart = {
  userId: string;
  productId: number;
}
