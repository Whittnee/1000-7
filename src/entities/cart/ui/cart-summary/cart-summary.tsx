import { Preloader } from "@/shared/ui/preloader";
import { AnimatePresence } from "framer-motion";
import { FC, memo } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { formatPrice } from "@/shared/lib/lib";
import { Separator } from "@/shared/ui/separator";
import { MdOutlineDiscount } from "react-icons/md";
import { Button } from "@/shared/ui/button";
import { TCartSummaryProps } from "@/entities/cart/ui/cart-summary/types";
import styles from "./styles.module.scss";

export const CartSummary: FC<TCartSummaryProps> = memo(
  ({
    onSubmit,
    inputValue,
    isError,
    onChange,
    size,
    subtotal,
    discount,
    deliveryFee,
    total,
    loading,
    children,
    className,
    ...otherProps
  }) => {
    return (
      <div className={clsx(styles.summary, styles[size], className)} {...otherProps}>
        <AnimatePresence>
          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              exit={{ opacity: 0 }}
              className={styles.preloader}
            >
              <Preloader size="big" />
            </motion.div>
          )}
        </AnimatePresence>
        <h3 className={clsx(styles.h3, styles[size])}>Order Summary</h3>
        <div className={styles.prices}>
          <div className={styles.pricelist}>
            <p className={styles[size]}>
              Subtotal <span>{formatPrice(subtotal)}</span>
            </p>
            <p className={styles[size]}>
              Discount{" "}
              <span className={styles.discount}>{formatPrice(discount)}</span>
            </p>
            <p className={styles[size]}>
              Delivery Fee <span>{formatPrice(deliveryFee)}</span>
            </p>
          </div>
          <Separator
            style={{ borderBottom: "1px solid var(--accent-color)" }}
          />
          <p className={clsx(styles.total, styles[size])}>
            Total <span>{formatPrice(total)}</span>
          </p>
          <form onSubmit={onSubmit} className={styles.form}>
            <label htmlFor="promoInput" style={{ display: "none" }}>
              Promo
            </label>
            <div className={styles.inputWrapper}>
              <MdOutlineDiscount className={styles.discountIcon} />
              <input
                type="text"
                id="promoInput"
                value={inputValue}
                onChange={onChange}
                spellCheck="false"
                placeholder="Add promo code"
              />
            </div>
            <Button
              className={styles.applyButton}
              type="submit"
              label="Apply"
            />
          </form>
          {isError && <p className={styles.error}>Promo code is not valid</p>}
        </div>
        {children}
      </div>
    );
  }
);
