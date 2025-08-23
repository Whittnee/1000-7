import { TCounterProps } from "@/shared/ui/counter/types";
import clsx from "clsx";
import { FC, memo } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import styles from "./styles.module.scss"

export const Counter: FC<TCounterProps> = memo(
  ({ count, increment, decrement, className, size = 'small', ...otherProps }) => {
    return (
      <div className={clsx(styles.counter, className, styles[size])} {...otherProps}>
        <button
          onClick={decrement}
          type="button"
          className={clsx(styles.button, styles[size])}
          disabled={count === 1}
        >
          <FiMinus/>
        </button>
        <p className={styles.count}>{count}</p>
        <button
          onClick={increment}
          type="button"
          className={clsx(styles.button, styles[size])}
        >
          <FiPlus />
        </button>
      </div>
    );
  }
);