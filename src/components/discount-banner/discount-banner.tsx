import { IoMdClose } from "react-icons/io";
import styles from "./discount-banner.module.scss";
import { FC, useEffect, useState } from "react";
import { Link } from "react-router";

export const DiscountBanner: FC = () => {
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
  <div className={styles.discountBanner}>
    <p className={styles.text}>
      Sign up and get 30% discount on your first order.
    </p>
    <Link to="/sign-up">
      <p className={styles.link}>Sign up Now</p>
    </Link>
    <button className={styles.button}>
      <IoMdClose type="button" onClick={handleClick} />
    </button>
  </div>
  );
};
