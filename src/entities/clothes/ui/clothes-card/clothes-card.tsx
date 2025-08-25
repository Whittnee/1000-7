import { FC, memo } from "react";
import { Link } from "react-router";
import { StarsRaiting } from "@/shared/ui/stars-raiting";
import { Price } from "@/shared/ui/price";
import styles from "./styles.module.scss";
import { Image } from "@/shared/ui/image";
import { TClothesCardProps } from "@/entities/clothes/ui/clothes-card/types";
import clsx from "clsx";

export const ClothesCard: FC<TClothesCardProps> = memo(
  ({ size, id, name, price, image, rating, discount, discountedPrice }) => {
    return (
      <div className={clsx(styles.card, styles[size])}>
        <Link to={`/clothes/${id}`}>
          <div className={styles.info}>
            <Image className={styles.img} src={image} alt={name} />
            <h3 className={styles.h3}>{name}</h3>
          </div>
        </Link>
        <div className={styles.raiting}>
          <StarsRaiting rating={rating} className={styles.star} />
          <p className={styles.number}>{rating}/5</p>
        </div>
        <Price
          price={price}
          discount={discount}
          discountedPrice={discountedPrice}
          size={size === "big" ? "medium" : size === "medium" ? "small" : size}
        />
      </div>
    );
  }
);
