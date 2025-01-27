import React, { FC, useEffect, useMemo } from "react";
import { selectCart, selectCartTotal } from "../../services/slices/cartSlice";
import { useSelector } from "../../services/store";
import { CartClothesCard } from "../cart-clothes-card";
import { Separator } from "../ui/separator";
import styles from "./cart.module.scss";
import { CartSummary } from "../cart-summary";
import { useLocation } from "react-router";

export const Cart: FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const clothes = useSelector(selectCart);
  const subtotal = useMemo(
    () => clothes.reduce((total, item) => total + item.totalPrice, 0),
    [clothes]
  );
  const deliveryFee = useMemo(
    () =>
      clothes.reduce(
        (total, item) => ((total + item.totalDiscountedPrice) * 5) / 100,
        0
      ),
    [clothes]
  );
  const total = useSelector(selectCartTotal);
  const discount = useMemo(
    () => Math.max(0, subtotal - total),
    [subtotal, total]
  );
  
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
                  <CartClothesCard {...item} />
                  {index < clothes.length - 1 && (
                    <Separator
                      style={{ borderBottom: "1px solid rgb(0, 0, 0, 0.5)" }}
                    />
                  )}
                </React.Fragment>
              ))}
            </ul>
          </>
        )}
        <CartSummary
          subtotal={subtotal}
          discount={discount}
          deliveryFee={deliveryFee}
          total={total}
          className={styles.summary}
        />
      </div>
    </section>
  );
};
