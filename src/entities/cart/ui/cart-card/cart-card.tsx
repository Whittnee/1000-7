import { FC, memo } from "react";
import styles from "./cart-card.module.scss"
import { Link } from "react-router";
import { Price } from "@/shared/ui/price";
import { FaRegTrashAlt } from "react-icons/fa";
import { Counter } from "@/shared/ui/counter";
import { TCartCardProps } from "@/entities/cart/ui/cart-card/cart-card-types";

export const CartCard: FC<TCartCardProps> = memo(
  ({
    id,
    name,
    images,
    size,
    color,
    quantity,
    price,
    discountedPrice,
    discount,
    onIncrement,
    onDecrement,
    onRemove,
  }) => {
    return (
      <li className={styles.cartCard}>
        <Link to={`/clothes/${id}`}>
          <img className={styles.img} src={images[0]} alt={name} />
        </Link>
        <div className={styles.content}>
          <div className={styles.info}>
            <div>
              <h3 className={styles.name}>{name}</h3>
              <p className={styles.option}>
                Size: <span>{size}</span>
              </p>
              <p className={styles.option}>
                Color: <span>{color}</span>
              </p>
            </div>
            <div className={styles.price}>
              <Price
                price={price * quantity}
                discount={discount}
                discountedPrice={discountedPrice * quantity}
                size="small"
              />
            </div>
          </div>
          <div className={styles.actions}>
            <button
              className={styles.button}
              type="button"
              onClick={onRemove}
            >
              <FaRegTrashAlt />
            </button>
            <Counter
              count={quantity}
              increment={onIncrement}
              decrement={onDecrement}
              size="small"
            />
          </div>
        </div>
      </li>
    )
  }
);
