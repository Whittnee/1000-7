import { FC, memo } from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router";
import { Price } from "@/shared/ui/price";
import { FaRegTrashAlt } from "react-icons/fa";
import { Counter } from "@/shared/ui/counter";
import { TCartCardProps } from "./types";
import { Image } from "@/shared/ui/image";
import clsx from "clsx";
export const CartCard: FC<TCartCardProps> = memo(
  ({
    id,
    size = 'medium',
    name,
    images,
    selectedSize,
    selectedColor,
    quantity,
    price,
    discountedPrice,
    discount,
    onIncrement,
    onDecrement,
    onRemove,
  }) => {
    return (
      <div className={clsx(styles.cartCard, styles[size])}>
        <Link to={`/clothes/${id}`}>
          <Image className={clsx(styles.img, styles[size])} src={images[0]} alt={name} />
        </Link>
        <div className={clsx(styles.content, styles[size])}>
          <div className={styles.info}>
            <div>
              <h3 className={clsx(styles.name, styles[size])}>{name}</h3>
              <p className={clsx(styles.option, styles[size])}>
                Size: <span>{selectedSize}</span>
              </p>
              <p className={clsx(styles.option, styles[size])}>
                Color: <span>{selectedColor}</span>
              </p>
            </div>
            <Price
              price={price * quantity}
              discount={discount}
              discountedPrice={discountedPrice * quantity}
              size={size === 'big' ? 'medium' : size}
            />
          </div>
          <div className={styles.actions}>
            <button className={styles.button} type="button" onClick={onRemove}>
              <FaRegTrashAlt />
            </button>
            <Counter
              count={quantity}
              increment={onIncrement}
              decrement={onDecrement}
              size={size === 'big' ? 'medium' : size}
            />
          </div>
        </div>
      </div>
    );
  }
);
