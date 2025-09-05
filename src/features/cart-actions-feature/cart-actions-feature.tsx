import { CartActions } from "@/entities/cart";
import { TCartActionsFeatureProps } from "./types";
import { useDeliveryDates } from "@/shared/hooks/useDeliveryDates";
import { FC, memo } from "react";
import { useParams } from "react-router";
import { useCartActions } from "@/entities/cart/hooks/useCartActions";

export const CartActionsFeature: FC<TCartActionsFeatureProps> = memo(
  ({
    size = 'big',
    selectedColor,
    selectedSize,
    userId,
    prices,
    location,
    className,
    ...otherProps
  }) => {
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
        size={size}
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
        className={className}
        {...otherProps}
      />
    );
  }
);
