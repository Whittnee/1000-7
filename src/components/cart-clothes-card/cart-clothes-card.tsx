import { FC, memo, useCallback } from "react";
import { TCartClothes } from "../../utils/types";
import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch } from "../../services/store";
import {
  removeFromCart,
  updateItemCount,
} from "../../services/slices/cartSlice";
import styles from "./cart-clothes-card.module.scss";
import { Counter } from "../ui/counter";
import { Price } from "../ui/price";
import { Link, useLocation } from "react-router";

export const CartClothesCard: FC<TCartClothes> = memo(
  ({
    id,
    name,
    image,
    size,
    count,
    discount,
    totalPrice,
    totalDiscountedPrice,
  }) => {
    const dispatch = useDispatch();
    const increment = useCallback(() => {
      dispatch(updateItemCount({ id: Number(id), count: count + 1 }));
    }, [id, count, dispatch]);

    const decrement = useCallback(() => {
      dispatch(updateItemCount({ id: Number(id), count: count - 1 }));
    }, [id, count, dispatch]);
    const handleRemoveFromCart = () => {
      dispatch(removeFromCart(id));
    };
    const location = useLocation()
    return (
      <li className={styles.cartClothesCard}>
        <Link to={`/clothes/${id}`} state={{ background: location }}>
        <img className={styles.img} src={image} alt={name} />
        </Link>
        <div className={styles.content}>
          <div className={styles.info}>
            <div>
              <h3 className={styles.name}>{name}</h3>
              <p className={styles.size}>
                Size: <span>{size}</span>
              </p>
            </div>
            <div className={styles.price}>
              <Price
                price={totalPrice}
                discount={discount}
                discountedPrice={totalDiscountedPrice}
                size="small"
              />
            </div>
          </div>
          <div className={styles.actions}>
            <button
              className={styles.button}
              type="button"
              onClick={handleRemoveFromCart}
            >
              <FaRegTrashAlt />
            </button>
            <Counter
              count={count}
              increment={increment}
              decrement={decrement}
              size="small"
            />
          </div>
        </div>
      </li>
    );
  }
);
