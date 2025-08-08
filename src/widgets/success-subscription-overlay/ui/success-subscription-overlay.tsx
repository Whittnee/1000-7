import { FC } from "react";
import { MdMarkEmailRead } from "react-icons/md";
import styles from "./styles.module.scss"

export const SuccessSubscriptionOverlay: FC = () => {
  return (
    <div className={styles.successSubscriptionOverlay}>
      <MdMarkEmailRead className={styles.icon} />
      <h2 className={styles.title}>We received your email!</h2>
      <p className={styles.text}>
        Thank you for subscribing. You’ll be the first to know about any updates
        and offers.
      </p>
    </div>
  );
};
