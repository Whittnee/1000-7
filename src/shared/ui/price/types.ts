export type TPriceProps = {
  price: number;
  discount: number | null;
  discountedPrice: number;
  size?: "small" | "medium" | "big";
};