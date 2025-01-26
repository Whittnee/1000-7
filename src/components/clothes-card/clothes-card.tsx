import { FC, memo } from "react";
import { TClothes } from "../../utils/types";
import { Link, useLocation } from "react-router";
import styles from "./clothes-card.module.scss";
import { Stars } from "../ui/stars";
import { Price } from "../ui/price";

export const ClothesCard: FC<TClothes> = memo(
  ({ id, name, price, image, rating = 0, discount, discountedPrice }) => {
    const location = useLocation();
    return (
      <li className={styles.clothes}>
        <Link
          to={`/clothes/${id}`}
          state={{ background: location }}
        >
        <div className={styles.info}>
          <img className={styles.img} src={image} alt={name} />
          <h3 className={styles.h3}>{name}</h3>
        </div>
        </Link>
        <div className={styles.container}>
          <Stars rating={rating} className={styles.star} />
          <p className={styles.raiting}>{rating}/5</p>
        </div>
        <div className={styles.price}>
          <Price
            price={price}
            discount={discount}
            discountedPrice={discountedPrice}
            size="small"
          />
        </div>
      </li>
    );
  }
);
