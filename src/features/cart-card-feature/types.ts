export type TCartCardFeatureProps = {
  size: 'small' | 'medium' | 'big';
  id: number;
  name: string;
  images: string[];
  selectedSize: string;
  selectedColor: string;
  price: number;
  discountedPrice: number;
  discount: number | null;
  userId: string;
}