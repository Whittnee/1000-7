import { TSearchCardProps } from "@/entities/clothes/ui/search-card/types";
import { FC, memo } from "react";
import { Link } from "react-router";
import styles from "./styles.module.scss";
import { Image } from "@/shared/ui/image";
import clsx from "clsx";

export const SearchCard: FC<TSearchCardProps> = memo(
  ({ productId, name, image, className, ...otherProps }) => {
    return (
      <Link
        to={`/clothes/${productId}`}
        className={clsx(styles.searchCard, className)}
        {...otherProps}
      >
        <Image src={image} alt={name} className={styles.image} />
        <span className={styles.name}>{name}</span>
      </Link>
    );
  }
);
