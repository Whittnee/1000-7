import { FC, memo, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import styles from "./stripe.module.scss";
import { FaArrowRightLong } from "react-icons/fa6";
import { nanoid } from "@reduxjs/toolkit";
import { Preloader } from "../preloader";

loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

type TStripeProps = {
  total: number;
};

export const Stripe: FC<TStripeProps> = memo(({ total }) => {
  const [loading, setloading] = useState<boolean>();

  const priceInCents = Math.round(total * 100);
  const handleCheckout = async () => {
    setloading(true);
    const response = await fetch(
      "http://localhost:5000/create-checkout-session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: [
            {
              id: nanoid(),
              name: "Product 1",
              price: priceInCents,
              quantity: 1,
            },
          ],
        }),
      }
    );
    const data = await response.json();
    window.location.href = data.url;
    setloading(false);
  };

  return loading ? (
    <Preloader />
  ) : (
    <button
      className={styles.button}
      onClick={handleCheckout}
      disabled={total === 0}
    >
      Checkout with <span>stripe</span>
      <FaArrowRightLong />
    </button>
  );
});
