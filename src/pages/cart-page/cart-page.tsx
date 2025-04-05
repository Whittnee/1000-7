import { FC } from "react";
import { MightLike } from "@/widgets/might-like";
import { Cart } from "@/widgets/cart/ui/cart";

export const CartPage: FC = () => {
  return (
    <>
      <Cart />
      <MightLike />
    </>
  );
};
