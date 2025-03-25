import { FaArrowRightLong } from "react-icons/fa6";
import styles from "./stripe-button.module.scss"
import { TStripeButtonProps } from "@/shared/ui/stripe-button/stripe-button-types";
import { FC } from "react";

export const StripeButton: FC<TStripeButtonProps> = ({ handleCheckout, disabled }) => {
  return (
    <button
      className={styles.button}
      onClick={handleCheckout}
      disabled={disabled}
      type="button"
    >
      Checkout with <span>stripe</span>
      <FaArrowRightLong />
    </button>
  );
};