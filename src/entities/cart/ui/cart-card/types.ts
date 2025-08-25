export type TCartCardProps = {
  size: 'small' | 'medium' | 'big';
  id: number;
  name: string;
  images: string[];
  selectedSize: string;
  selectedColor: string;
  quantity: number;
  price: number;
  discountedPrice: number;
  discount: number | null;
  onIncrement: () => void;
  onDecrement: () => void;
  onRemove: () => void;
}