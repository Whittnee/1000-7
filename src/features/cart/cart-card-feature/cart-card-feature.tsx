import { CartCard, useCartActions } from "@/entities/cart";
import { TCartCardFeatureProps } from "@/features/cart/cart-card-feature/cart-card-feature-types";
import { FC, memo } from "react";

export const CartCardFeature: FC<TCartCardFeatureProps> = memo((props) => {
  const { id, userId } = props;
  const {
    quantity,
    onIncrement,
    onDecrement,
    onRemove,
  } = useCartActions(id, userId);

  return (
    <CartCard
      {...props}
      quantity={quantity}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
      onRemove={onRemove}
    />
  );
});
