import { TUserLocation } from "@/shared/types/user";

export type TCartActionsProps = {
  price: number;
  discountedPrice: number;
  discount: number | null;
  quantity: number;
  loadingCart: boolean;
  location: TUserLocation | null; 
  isMissing: string[];
  today: string;
  deliveryDate: string;
  onIncrement: () => void;
  onDecrement: () => void;
  onRemove: () => void;
  onAddToCart: () => void;
};