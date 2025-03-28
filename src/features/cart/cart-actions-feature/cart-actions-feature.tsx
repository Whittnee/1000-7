import { CartActions, useCartActions } from "@/entities/cart";
import { TCartActionsFeatureProps } from "@/features/cart/cart-actions-feature/cart-actions-feature-types";
import { useDeliveryDates } from "@/shared/hooks/useDeliveryDates";
import { FC, memo } from "react";
import { useParams } from "react-router";

export const CartActionsFeature: FC<TCartActionsFeatureProps> = memo(
  ({ selectedColor, selectedSize, userId, prices, location }) => {
    const { id } = useParams();
    const { today, deliveryDate } = useDeliveryDates();

    const {
      isMissing,
      loadingCart,
      quantity,
      onIncrement,
      onDecrement,
      onRemove,
      onAddToCart,
    } = useCartActions(Number(id), userId);

    return (
      <CartActions
        {...prices}
        quantity={quantity}
        loadingCart={loadingCart}
        location={location}
        isMissing={isMissing}
        today={today}
        deliveryDate={deliveryDate}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onRemove={onRemove}
        onAddToCart={() => onAddToCart(selectedSize, selectedColor)}
      />
    );
  }
);
