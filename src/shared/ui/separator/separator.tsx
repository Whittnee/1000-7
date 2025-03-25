import { FC, memo } from "react";
import styles from "./separator.module.scss"
import { TSeparatorProps } from "@/shared/ui/separator/separator-types";

export const Separator: FC<TSeparatorProps> = memo(({ style }) => (
  <div className={styles.separator} style={style}>
    {" "}
  </div>
));
