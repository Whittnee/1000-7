import { TCartActionsProps } from "./types";
import { Counter } from "@/shared/ui/counter";
import { Preloader } from "@/shared/ui/preloader";
import { Price } from "@/shared/ui/price";
import { Separator } from "@/shared/ui/separator";
import { FC, memo } from "react";
import { IoReloadCircle } from "react-icons/io5";
import { Link } from "react-router";
import clsx from "clsx";
import { Button } from "@/shared/ui/button";
import styles from "./styles.module.scss";

export const CartActions: FC<TCartActionsProps> = memo(
  ({
    price,
    size,
    discountedPrice,
    discount,
    location,
    isMissing,
    quantity,
    loadingCart,
    today,
    deliveryDate,
    onIncrement,
    onDecrement,
    onRemove,
    onAddToCart,
    className,
    ...otherProps
  }) => {
    return (
      <div className={clsx(styles.cartActions, className)} {...otherProps}>
        <Price
          price={price}
          discount={discount}
          discountedPrice={discountedPrice}
          size={size}
        />
        <p className={styles.p}>
          <IoReloadCircle
            style={{ color: "var(--discount-color)" }}
          />{" "}
          Free 10-day returns
        </p>
        <div className={styles.actions}>
          {loadingCart ? (
            <Preloader size="medium" />
          ) : quantity > 0 ? (
            <>
              <div className={styles.buttons}>
                <Link to="/cart" style={{ width: "50%", display: "block" }}>
                  <Button
                    className={clsx(styles.cartButton, styles[size])}
                    type="button"
                    label="To the Cart"
                  />
                </Link>
                <Counter
                  style={{ width: "50%" }}
                  count={quantity}
                  increment={onIncrement}
                  decrement={onDecrement}
                  size={size}
                />
              </div>
              <Button
                className={clsx(styles.removeButton, styles[size])}
                type="button"
                onClick={onRemove}
                label="Remove from Cart"
              />
            </>
          ) : (
            <>
              <Button
                className={clsx(styles.addButton, styles[size])}
                type="button"
                onClick={onAddToCart}
                label="Add to Cart"
              />
              <p
                className={clsx(styles.error, {
                  [styles.active]: isMissing.length > 0,
                })}
              >
                Please select {isMissing.join(" and ")}!
              </p>
            </>
          )}
        </div>
        <Separator />
        {location && Object.keys(location).length > 0 && (
          <span className={styles.span}>
            {location.country}, {location.city}
          </span>
        )}
        <p className={styles.p}>
          Delivery:
          <span className={styles.span}>
            {today} - {deliveryDate}
          </span>
        </p>
        <p className={styles.p}>Payment: <span className={styles.span}>Secure Transaction</span></p>
      </div>
    );
  }
);
