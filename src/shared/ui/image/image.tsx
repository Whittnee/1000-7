import { FC } from "react";
import styles from "./styles.module.scss";
import { TImageProps } from "@/shared/ui/image/types";
import clsx from "clsx";

export const Image: FC<TImageProps> = ({
  src,
  alt,
  className,
  ...otherProps
}) => {
  return (
    <img
      className={clsx(styles.image, className)}
      src={src}
      alt={alt}
      {...otherProps}
    />
  );
};
