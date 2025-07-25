import { FC, memo } from "react";
import styles from "./styles.module.scss"
import { Link } from "react-router";
import { IoIosArrowForward } from "react-icons/io";
import { TNavigationProps } from "@/shared/ui/navigation/types";
import clsx from "clsx";

export const Navigation: FC<TNavigationProps> = memo(({name, category, className, ...otherProps}) => {
  return (
    <ul className={clsx(styles.navigation, className)} {...otherProps}>
        <li>
          <Link className={styles.link} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/catalog">
            <IoIosArrowForward /> Catalog
          </Link>
        </li>
        <li>
          <Link className={styles.link} to={`/catalog/?category=${category}`}>
            <IoIosArrowForward /> {category}
          </Link>
        </li>
        <li className={styles.link}>
          <IoIosArrowForward /> {name}
        </li>
      </ul>
  )
})