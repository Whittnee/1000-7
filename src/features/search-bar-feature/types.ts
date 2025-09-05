import { TSlicedProduct } from "@/shared/types/products";

export type TSearchBarFeatureProps = {
  clothes: TSlicedProduct[];
  autofocus: boolean
  handleEvent?: () => void;
} & React.HTMLAttributes<HTMLDivElement>;