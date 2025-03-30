import { selectCart, selectCartTotalPrices, selectIsLoadingCart } from "@/entities/cart";
import { useSelector } from "@/entities/store";
import React, { FC } from "react";
import styles from "./cart.module.scss"
import { Separator } from "@/shared/ui/separator";
import { CartSummary } from "@/widgets/cart-summary";
import { CartCardFeature } from "@/features/cart";
export const Cart: FC = () => {
  const userId = localStorage.getItem("userId")!;
  const clothes = useSelector(selectCart);
  const loadingCart = useSelector(selectIsLoadingCart)
  const total = useSelector(selectCartTotalPrices);

  return (
    <section className={styles.cart}>
      <h2 className={styles.h2}>
        Your Cart <span className={styles.count}>({clothes.length})</span>
      </h2>
      <div className={styles.content}>
        {clothes.length > 0 && (
          <>
            <ul className={styles.orders}>
              {clothes.map((item, index) => (
                <React.Fragment key={item.id}>
                  <CartCardFeature {...item} userId={userId} />
                  {index < clothes.length - 1 && (
                    <Separator
                      style={{ borderBottom: "1px solid var(--accent-color)" }}
                    />
                  )}
                </React.Fragment>
              ))}
            </ul>
          </>
        )}
        <CartSummary
          subtotal={total.subtotal}
          discount={total.discount}
          deliveryFee={total.deliveryFee}
          total={total.total}
          loading={loadingCart}
          className={styles.summary}
        />
      </div>
    </section>
  );
};