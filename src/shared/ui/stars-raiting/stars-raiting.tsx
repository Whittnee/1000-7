import { TStarsRaitingProps } from "@/shared/ui/stars-raiting/stars-raiting-types";
import { FC, memo } from "react";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import styles from "./stars-raiting.module.scss"
import clsx from "clsx";

export const StarsRaiting: FC<TStarsRaitingProps> = memo(({ rating, className }) => {
  const isRaitingInteger = Number.isInteger(rating);
  return (
    <ul className={styles.stars}>
      {Array.from({ length: Math.floor(rating)}, (_, i) => (
        <IoMdStar key={i} className={clsx(className, styles.star)} />
      ))}
      {!isRaitingInteger && <IoMdStarHalf className={clsx(className, styles.star)} />}
    </ul>
  )
})