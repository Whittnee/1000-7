import { FC, memo } from "react";
import styles from "./styles.module.scss"
import { TSeparatorProps } from "@/shared/ui/separator/types";
import clsx from "clsx";

export const Separator: FC<TSeparatorProps> = memo(({ className, ...otherProps }) => (
  <div className={clsx(styles.separator, className)} {...otherProps}/>
));
