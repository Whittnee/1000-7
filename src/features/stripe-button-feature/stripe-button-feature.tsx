import { selectCart, selectCartTotalPrices } from "@/entities/cart";
import { useSelector } from "@/entities/store";
import { API_URL, STRIPE_PUBLISHABLE_KEY } from "@/shared/config/env";
import { Button } from "@/shared/ui/button";
import { Preloader } from "@/shared/ui/preloader";
import { loadStripe } from "@stripe/stripe-js";
import { FC, useState } from "react";
import styles from "./styles.module.scss";
import { FaArrowRightLong } from "react-icons/fa6";

loadStripe(STRIPE_PUBLISHABLE_KEY);

export const StripeButtonFeature: FC = () => {
  const cartClothes = useSelector(selectCart);
  const total = useSelector(selectCartTotalPrices);
  const [loading, setloading] = useState<boolean>(false);

  const handleCheckout = async () => {
    setloading(true);
    const response = await fetch(`${API_URL}/create-checkout-session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [
          ...cartClothes.map((item) => ({
            id: item.id,
            name: item.name,
            price: Math.round(item.discountedPrice * 100),
            quantity: item.quantity,
          })),
          {
            id: "delivery Fee",
            name: "Delivery Fee",
            price: Math.round(total.deliveryFee * 100),
            quantity: 1,
          },
        ],
      }),
    });
    const data = await response.json();
    window.location.href = data.url;
    setloading(false);
  };
  return loading ? (
    <Preloader />
  ) : (
    <Button
      className={styles.stripeButton}
      onClick={handleCheckout}
      disabled={total.total === 0}
      type="button"
      label={
        <>
          Checkout with <span>stripe</span>
          <FaArrowRightLong />
        </>
      }
    />
  );
};
