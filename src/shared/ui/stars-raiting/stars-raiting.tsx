import { TStarsRaitingProps } from "@/shared/ui/stars-raiting/types";
import { FC, memo } from "react";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import styles from "./styles.module.scss";
import clsx from "clsx";

export const StarsRaiting: FC<TStarsRaitingProps> = memo(
  ({ rating, className }) => {
    const isRaitingInteger = Number.isInteger(rating);
    return (
      <ul className={styles.stars}>
        {Array.from({ length: Math.floor(rating) }, (_, i) => (
          <li key={i}>
            <IoMdStar className={clsx(className, styles.star)} />
          </li>
        ))}
        <li>
          {!isRaitingInteger && (
            <IoMdStarHalf className={clsx(className, styles.star)} />
          )}
        </li>
      </ul>
    );
  }
);
