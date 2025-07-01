import { TCartActionsProps } from "@/entities/cart/ui/cart-actions/cart-actions-types";
import { Counter } from "@/shared/ui/counter";
import { Preloader } from "@/shared/ui/preloader";
import { Price } from "@/shared/ui/price";
import { Separator } from "@/shared/ui/separator";
import { FC, memo } from "react";
import { IoReloadCircle } from "react-icons/io5";
import { Link } from "react-router";
import styles from "./cart-actions.module.scss";
import clsx from "clsx";

export const CartActions: FC<TCartActionsProps> = memo(
  ({
    price,
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
  }) => {
    return (
      <div className={styles.cartActions}>
        <div className={styles.price}>
          <Price
            price={price}
            discount={discount}
            discountedPrice={discountedPrice}
            size="medium"
          />
          <p></p>
        </div>
        <p className={styles.p}>
          <IoReloadCircle
            className={styles.icon}
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
                  <button className={styles.cartButton} type="button">
                    To the Cart
                  </button>
                </Link>
                <Counter
                  count={quantity}
                  increment={onIncrement}
                  decrement={onDecrement}
                  size="medium"
                />
              </div>
              <button
                className={styles.removeButton}
                type="button"
                onClick={onRemove}
              >
                Remove from Cart
              </button>
            </>
          ) : (
            <>
              <button
                className={styles.addButton}
                type="button"
                onClick={onAddToCart}
              >
                Add to Cart
              </button>
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
        {Object.keys(location!).length > 0 && (
          <span className={styles.span}>
            {location?.country}, {location?.city}
          </span>
        )}
        <p className={styles.p}>
          Delivery:
          <span className={styles.span}>
            {today} - {deliveryDate}
          </span>
        </p>
      </div>
    );
  }
);
