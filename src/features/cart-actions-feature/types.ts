import { TUserLocation } from "@/shared/types/user";

export type TCartActionsFeatureProps = {
  size: 'medium' | 'big';
  selectedSize: string;
  selectedColor: string;
  userId: string;
  location: TUserLocation | null;
  prices: {
    price: number;
    discountedPrice: number;
    discount: number | null;
  }
} & React.HTMLAttributes<HTMLDivElement>