import { TUserLocation } from "@/shared/types/user";

export type TCartActionsProps = {
  price: number;
  size: 'medium' | 'big';
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
} & React.HTMLAttributes<HTMLDivElement>;
