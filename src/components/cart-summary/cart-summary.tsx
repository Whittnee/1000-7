import { FC } from "react";
import styles from "./cart-summary.module.scss";
import { formatPrice } from "../../utils/variables";
import { Separator } from "../ui/separator";

import clsx from "clsx";
import { Stripe } from "../ui/stripe";

type TCartSummaryProps = {
  subtotal: number;
  discount: number;
  deliveryFee: number;
  total: number;
  className?: string;
};

export const CartSummary: FC<TCartSummaryProps> = ({
  subtotal,
  discount,
  deliveryFee,
  total,
  className
}) => {
  return (
    <div className={clsx(styles.summary, className)}>
      <h3 className={styles.h3}>Order Summary</h3>
      <div className={styles.prices}>
        <div className={styles.pricelist}>
          <p>
            Subtotal <span>{formatPrice(subtotal)}</span>
          </p>
          <p>
            Discount{" "}
            <span className={styles.discount}>{formatPrice(discount)}</span>
          </p>
          <p>
            Delivery Fee <span>{formatPrice(deliveryFee)}</span>
          </p>
        </div>
        <Separator style={{ borderBottom: "1px solid rgb(0, 0, 0, 0.5)" }} />
        <p className={styles.total}>
          Total <span>{formatPrice(total + deliveryFee)}</span>
        </p>
      </div>
      <Stripe total={total + deliveryFee}/>
    </div>
  );
};
