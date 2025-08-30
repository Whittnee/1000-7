import { FC } from "react";
import { MightLikeSection } from "@/widgets/might-like-section";
import { Cart } from "@/widgets/cart/ui/cart";
import styles from "./styles.module.scss"


export const CartPage: FC = () => {
  return (
    <div className={styles.cartPage}>
      <Cart />
      <MightLikeSection />
    </div>
  );
};
