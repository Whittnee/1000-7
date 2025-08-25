import { TSlicedProduct } from "@/shared/types/products";

export type TClothesCardProps = TSlicedProduct & {
  size: 'small' | 'medium' | 'big';
}