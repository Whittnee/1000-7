import clsx from "clsx";
import styles from "./styles.module.scss";
import { FC } from "react";
import { Button } from "@/shared/ui/button";
import { Link, useNavigate } from "react-router";
import { useCounter } from "@/shared/hooks/useCounter";
import { Image } from "@/shared/ui/image";
import { motion } from "framer-motion";

export const WelcomeBanner: FC = () => {
  const items = useCounter(1000, 1500);
  const brands = useCounter(3000, 1500);
  const customers = useCounter(1000, 1500);

  const navigate = useNavigate();

  return (
    <motion.section
      initial={{ opacity: 0, translateY: 30 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
      className={styles.welcomeBanner}
    >
      <div className={styles.left}>
        <div className={styles.information}>
          <h1 className={styles.h1}>
            Discover And
            <br /> Shop Fashion
          </h1>
          <p className={styles.text}>
            Explore, Find And Wear Unique Styles In Our Curated{" "}
            <br className={styles.brMobile} /> Clothing Store.{" "}
            <br className={styles.brDesktop} />
            Shop From Thousands Of Items <br className={styles.brMobile} /> And
            Get a <strong>$20 Welcome Bonus</strong>.
          </p>
          <div className={styles.buttons}>
            <Button
              className={styles.shopButton}
              type="button"
              label="SHOP NOW"
              onClick={() => navigate('/catalog')}
            />
            <Button
              className={styles.checkoutButton}
              type="button"
              label="CHECKOUT"
              onClick={() => navigate('/cart')}
            />
          </div>
        </div>
        <ul className={styles.stats}>
          <li className={styles.stat}>
            <strong className={styles.strong}>
              {Math.floor(items).toLocaleString()}+
            </strong>
            Items
          </li>
          <li className={styles.stat}>
            <strong className={styles.strong}>
              {Math.floor(brands).toLocaleString()}+
            </strong>
            Brands
          </li>
          <li className={styles.stat}>
            <strong className={styles.strong}>
              {Math.floor(customers).toLocaleString()}+
            </strong>
            Customers
          </li>
        </ul>
      </div>
      <div className={styles.right}>
        <div className={styles.images}>
          <svg className={styles.arrow}>
            <use href="/arrow.svg#arrow" />
          </svg>
          <Link to="/clothes/6" className={styles.card}>
            <span className={styles.ribbon}>MOST WANTED</span>
            <Image id="img1" className={styles.img} src="/product-6-0.webp" />
          </Link>
          <Link to="/clothes/8" className={clsx(styles.card, styles.right)}>
            <span className={styles.ribbon}>MOST WANTED</span>
            <Image
              id="img2"
              className={clsx(styles.img, styles.right)}
              src="/product-8-0.webp"
            />
          </Link>
        </div>
      </div>
    </motion.section>
  );
};
