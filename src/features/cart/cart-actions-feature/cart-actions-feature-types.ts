import { TUserLocation } from "@/shared/types/user";

export type TCartActionsFeatureProps = {
  selectedSize: string;
  selectedColor: string;
  userId: string;
  location: TUserLocation | null;
  prices: {
    price: number;
    discountedPrice: number;
    discount: number | null;
  }
}