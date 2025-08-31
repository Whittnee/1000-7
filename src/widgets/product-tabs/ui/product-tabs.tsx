import { ReviewCard, selectReviews } from "@/entities/reviews";
import { useSelector } from "@/entities/store";
import { FC, useState } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";

export const ProductTabs: FC = () => {
  const reviews = useSelector(selectReviews);
  const [toggle, setToggle] = useState<number>(2);

  const updateToggle = (id: number) => {
    setToggle(id);
  };

  return (
    <div className={styles.productTabs}>
      <ul className={styles.tabs}>
        {/* <li className={clsx(styles.tab, {[styles.active]: toggle === 1})} onClick={() => updateToggle(1)}><span>Product Details</span></li> */}
        <li
          className={clsx(styles.tab, { [styles.active]: toggle === 2 })}
          onClick={() => updateToggle(2)}
        >
          <span>Raiting & Reviews</span>
        </li>
        {/* <li className={clsx(styles.tab, {[styles.active]: toggle === 3})} onClick={() => updateToggle(3)}><span>FAQs</span></li> */}
      </ul>
      <div
        className={clsx(styles.tabContent, { [styles.active]: toggle === 1 })}
      ></div>
      <div
        className={clsx(styles.tabContent, { [styles.active]: toggle === 2 })}
      >
        <div className={styles.container}>
          <h3 className={styles.title}>
            All Reviews <span className={styles.count}>({reviews.length})</span>
          </h3>
          <ul className={styles.reviews}>
            {reviews.map((item) => (
              <li key={item.id}>
                <ReviewCard {...item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={clsx(styles.tabContent, { [styles.active]: toggle === 3 })}
      ></div>
    </div>
  );
};
