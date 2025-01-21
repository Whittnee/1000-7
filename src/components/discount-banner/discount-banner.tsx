import { IoMdClose } from "react-icons/io";
import styles from "./discount-banner.module.scss";
import { useEffect, useState } from "react";

export const DiscountBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const hasClosed = localStorage.getItem("hasClosed");
    if (hasClosed === "true") {
      setIsVisible(false);
    }
  }, []);
  const handleClick = () => {
    localStorage.setItem("hasClosed", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={styles.contentWrapper}>
      <p className={styles.text}>
        Sign up and get 30% discount on your first order.
      </p>
      <a className={styles.link} href="#">
        Sign up Now
      </a>
      <IoMdClose className={styles.closeIcon} onClick={handleClick} />
    </div>
  );
};
