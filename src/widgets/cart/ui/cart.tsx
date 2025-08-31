import {
  selectCart,
} from "@/entities/cart";
import { useSelector } from "@/entities/store";
import { FC } from "react";
import { Separator } from "@/shared/ui/separator";
import { CartCardFeature } from "@/features/cart-card-feature";
import { useMediaQuery } from "react-responsive";
import clsx from "clsx";
import { CartSummaryFeature } from "@/features/cart-summary-feature";
import { StripeButtonFeature } from "@/features/stripe-button-feature";
import styles from "./styles.module.scss";
export const Cart: FC = () => {
  const userId = localStorage.getItem("userId")!;
  const clothes = useSelector(selectCart);

  const isMobile = useMediaQuery({ maxWidth: 586 });
  const isTablet = useMediaQuery({ minWidth: 586, maxWidth: 950 });
  const isLaptop = useMediaQuery({ minWidth: 951, maxWidth: 1070 });

  const size: "small" | "medium" | "big" = isMobile
    ? "small"
    : isTablet || isLaptop
    ? "medium"
    : "big";
  return (
    <section className={styles.cart}>
      <h2 className={styles.h2}>
        Your Cart <span className={styles.count}>({clothes.length})</span>
      </h2>
      <div className={clsx(styles.content, styles[size])}>
        {clothes.length > 0 && (
          <ul className={styles.orders}>
            {clothes.map((item, index) => (
              <li key={item.id}>
                <CartCardFeature
                  selectedColor={item.color}
                  selectedSize={item.size}
                  {...item}
                  size={size}
                  userId={userId}
                />
                {isMobile ? (
                  <Separator />
                ) : (
                  index < clothes.length - 1 && <Separator />
                )}
              </li>
            ))}
          </ul>
        )}
        <CartSummaryFeature
          size={isMobile || isLaptop || isTablet ? "medium" : "big"}
          className={styles.summary}
        >
          <StripeButtonFeature />
        </CartSummaryFeature>
      </div>
    </section>
  );
};
