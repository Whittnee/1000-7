export type TCartCardProps = {
  id: number;
  name: string;
  images: string[];
  size: string;
  color: string;
  quantity: number;
  price: number;
  discountedPrice: number;
  discount: number | null;
  onIncrement: () => void;
  onDecrement: () => void;
  onRemove: () => void;
}