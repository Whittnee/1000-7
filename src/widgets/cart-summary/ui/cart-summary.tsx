import React, { FC, memo, useState } from "react";
import styles from "./cart-summary.module.scss";;

import clsx from "clsx";
import { MdOutlineDiscount } from "react-icons/md";
import { TCartSummaryProps } from "@/widgets/cart-summary/ui/cart-summary-types";
import { Preloader } from "@/shared/ui/preloader";
import { formatPrice } from "@/shared/lib/formatPrice";
import { Separator } from "@/shared/ui/separator";
import { StripeButtonFeature } from "@/features/stripe-button-feature";

export const CartSummary: FC<TCartSummaryProps> = memo(
  ({ subtotal, discount, deliveryFee, total, loading, className }) => {
    const [isError, setIsError] = useState<boolean>(false);
    const [value, setValue] = useState<string>("");

    const handleApply = (e: React.FormEvent) => {
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
      <div className={clsx(styles.summary, className)}>
        {loading ? (
          <Preloader size="medium" />
        ) : (
          <>
            {" "}
            <h3 className={styles.h3}>Order Summary</h3>
            <div className={styles.prices}>
              <div className={styles.pricelist}>
                <p>
                  Subtotal <span>{formatPrice(subtotal)}</span>
                </p>
                <p>
                  Discount{" "}
                  <span className={styles.discount}>
                    {formatPrice(discount)}
                  </span>
                </p>
                <p>
                  Delivery Fee <span>{formatPrice(deliveryFee)}</span>
                </p>
              </div>
              <Separator
                style={{ borderBottom: "1px solid var(--accent-color)" }}
              />
              <p className={styles.total}>
                Total <span>{formatPrice(total)}</span>
              </p>
              <form onSubmit={handleApply} className={styles.form}>
                <label htmlFor="promoInput" style={{ display: "none" }}>
                  Promo
                </label>
                <div className={styles.inputWrapper}>
                  <MdOutlineDiscount className={styles.discountIcon} />
                  <input
                    type="text"
                    id="promoInput"
                    value={value}
                    onChange={handleChange}
                    spellCheck="false"
                    placeholder="Add promo code"
                  />
                </div>
                <button className={styles.button} type="submit">
                  Apply
                </button>
              </form>
              <p className={clsx(styles.error, { [styles.active]: isError })}>
                Promo code is not valid
              </p>
            </div>
            <StripeButtonFeature/>
          </>
        )}
      </div>
    );
  }
);
