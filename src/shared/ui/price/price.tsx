import { TPriceProps } from "@/shared/ui/price/types";
import clsx from "clsx";
import { FC, memo } from "react";
import styles from "./styles.module.scss"
import { formatPrice } from "@/shared/lib/lib"; 

export const Price: FC<TPriceProps> = memo(({ price, discount, discountedPrice, size = 'small' }) => {
  const formattedPrice = discount && discountedPrice ? formatPrice(discountedPrice) : formatPrice(price);
  const formattedOriginalPrice = discount ? formatPrice(price) : null;
  return (
    <div className={clsx(styles.price, styles[size])}>
      <p className={clsx(styles.currentPrice, styles[size])}>{formattedPrice}</p>
      {discount &&  (
        <>
          <p className={clsx(styles.currentPrice, styles.discountedPrice, styles[size])}>{formattedOriginalPrice}</p>
          <div className={clsx(styles.container, styles[size])}>
            <p className={clsx(styles.discount, styles[size])}>-{discount}%</p>
          </div>
        </>
      )}
    </div>
  );
});