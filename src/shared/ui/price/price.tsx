import { TPriceProps } from "@/shared/ui/price/price-types";
import clsx from "clsx";
import { FC, memo } from "react";
import styles from "./price.module.scss"
import { formatPrice } from "@/shared/lib/formatPrice";

export const Price: FC<TPriceProps> = memo(({ price, discount, discountedPrice, size = 'small' }) => {
  const formattedPrice = discount && discountedPrice ? formatPrice(discountedPrice) : formatPrice(price);
  const formattedOriginalPrice = discount ? formatPrice(price) : null;
  return (
    <>
      <p className={clsx(styles.price, styles[size])}>{formattedPrice}</p>
      {discount &&  (
        <>
          <p className={clsx(styles.price, styles.discountedPrice, styles[size])}>{formattedOriginalPrice}</p>
          <div className={styles.container}>
            <p className={clsx(styles.discount, styles[size])}>-{discount}%</p>
          </div>
        </>
      )}
    </>
  );
});