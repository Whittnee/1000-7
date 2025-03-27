import { TSlicedClothes } from "@/shared/types/clothes";
import { FC, memo, useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion"
import { StarsRaiting } from "@/shared/ui/stars-raiting";
import { Price } from "@/shared/ui/price";
import styles from "./clothes-card.module.scss"

export const ClothesCard: FC<TSlicedClothes> = memo(
  ({ id, name, price, image, rating, discount, discountedPrice  }) => {
    const [isFirstRender] = useState(() => {
      return sessionStorage.getItem(`isFirstRender-${id}`) !== "true";
    });

    useEffect(() => {
      if(isFirstRender) {
        sessionStorage.setItem(`isFirstRender-${id}`, "true");
      }
    }, [isFirstRender, id])
    return (
      <motion.li
        className={styles.clothes}
        initial={isFirstRender ? { opacity: 0, y: 50 } : false}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          opacity: { duration: 0.5, ease: "easeInOut" },
          y: { duration: 0.5, ease: "easeInOut" },
        }}
      >
        <Link to={`/clothes/${id}`}>
          <div className={styles.info}>
            <img className={styles.img} src={image} alt={name} />
            <h3 className={styles.h3}>{name}</h3>
          </div>
        </Link>
        <div className={styles.container}>
          <StarsRaiting rating={rating} className={styles.star} />
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
      </motion.li>
    );
  }
);