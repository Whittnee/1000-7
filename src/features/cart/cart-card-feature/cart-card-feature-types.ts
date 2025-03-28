export type TCartCardFeatureProps = {
  id: number;
  name: string;
  images: string[];
  size: string;
  color: string;
  price: number;
  discountedPrice: number;
  discount: number | null;
  userId: string;
}