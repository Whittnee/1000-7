import { TButtonProps } from "@/shared/ui/button/types";
import { FC, memo } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";

export const Button: FC<TButtonProps> = memo(
  ({ label, type = "button", className, disabled = false, ...otherProps }) => {
    return (
      <button className={clsx(styles.button, className)} {...otherProps} type={type} disabled={disabled}>
        {label}
      </button>
    );
  }
);
