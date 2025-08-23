import { FC, memo } from "react"; 
import { TSizeSelectorProps } from "@/shared/ui/size-selector/types";
import styles from "./styles.module.scss"
import clsx from "clsx";

export const SizeSelector: FC<TSizeSelectorProps> = memo(
  ({
    sizes,
    selectedSize,
    size = "small",
    showTitle = true,
    setSelectedSize,
  }) => {
    const handleClick = (size: string) => {
      setSelectedSize(prev => (prev === size ? "" : size));
    }
    return (
      <div className={styles.sizeSelector}>
        {showTitle && <p className={styles.header}>Choose Size</p>}
        <div className={styles.options}>
          {sizes.map((item) => (
            <label
              key={item}
              className={clsx(styles.option, styles[size], {
                [styles.active]: selectedSize === item,
              })}
            >
              <input
                type="radio"
                name="size"
                value={item}
                className={styles.input}
                defaultChecked={selectedSize === item}
                onClick={() => handleClick(item)}
              />
              {item}
            </label>
          ))}
        </div>
      </div>
    );
  }
);