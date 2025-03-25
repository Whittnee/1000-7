import { TCounterProps } from "@/shared/ui/counter/counter-types";
import clsx from "clsx";
import { FC, memo } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import styles from "./counter.module.scss"

export const Counter: FC<TCounterProps> = memo(
  ({ count, increment, decrement, size = 'small' }) => {
    return (
      <div className={clsx(styles.counter, styles[size])}>
        <button
          onClick={decrement}
          type="button"
          className={styles.button}
          disabled={count === 1}
        >
          <FiMinus/>
        </button>
        <p className={styles.count}>{count}</p>
        <button
          onClick={increment}
          type="button"
          className={styles.button}
        >
          <FiPlus />
        </button>
      </div>
    );
  }
);