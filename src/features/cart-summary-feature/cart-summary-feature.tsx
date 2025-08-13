import {
  CartSummary,
  selectCartTotalPrices,
  selectIsLoadingCart,
} from "@/entities/cart";
import { useSelector } from "@/entities/store";
import { TCartSummaryFeatureProps } from "@/features/cart-summary-feature/types";
import { FC, memo, useState } from "react";
export const CartSummaryFeature: FC<TCartSummaryFeatureProps> = memo(
  ({ size, children, className, ...otherProps }) => {
    const total = useSelector(selectCartTotalPrices);
    const loading = useSelector(selectIsLoadingCart);
    const [isError, setIsError] = useState<boolean>(false);
    const [value, setValue] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!value) return;
      setValue("");
      setIsError(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      setIsError(false);
    };

    return (
      <CartSummary
        {...total}
        isError={isError}
        inputValue={value}
        size={size}
        loading={loading}
        className={className}
        {...otherProps}
        onSubmit={handleSubmit}
        onChange={handleChange}
      >
        {children}
      </CartSummary>
    );
  }
);
