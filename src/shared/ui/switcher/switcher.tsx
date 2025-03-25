import { TSwitcherProps } from "@/shared/ui/switcher/switcher-types";
import clsx from "clsx";
import { FC, memo } from "react";
import styles from "./switcher.module.scss"

export const Switcher: FC<TSwitcherProps> = memo(({
  category,
  selectedCategory,
  setSelectedCategory,
}) => {
  const handleClick = (string: string) => {
    setSelectedCategory((prev) => (prev === string ? "" : string));
  };
  return (
    <div className={styles.switcher}>
      <label className={clsx(styles.label, { [styles.active]: selectedCategory === category })}>
        <input
          type="checkbox"
          name="category"
          value={category}
          checked={selectedCategory === category}
          onChange={() => handleClick(category)}
        />
      </label>
    </div>
  );
});