import { TColorSelectorProps } from "./types";
import { FC, memo } from "react";
import styles from "./styles.module.scss"
import clsx from "clsx";
import { FaCheck } from "react-icons/fa";

export const ColorSelector: FC<TColorSelectorProps> = memo(
  ({ colors, selectedColor, size = "small", showTitle = true, setSelectedColor }) => {
    const handleClick = (color: string) => {
      setSelectedColor((prev) => (prev === color ? "" : color));
    }
    
    return (
      <div className={styles.colorSelector}>
        {showTitle && <p className={styles.header}>Choose Color</p>}
        <div className={styles.options}>
          {colors.map((color) => (
            <label
              key={color}
              className={clsx(styles.option, styles[size], {
                [styles.active]: selectedColor === color,
              })}
              style={{ backgroundColor: color }}
            >
              <input
                type="radio"
                name="size"
                value={color}
                defaultChecked={selectedColor === color}
                onClick={() => handleClick(color)}
              />
              <FaCheck
                style={{ stroke: "var(--accent-color)", strokeWidth: 10 }}
                className={styles.checkMark}
              />
            </label>
          ))}
        </div>
      </div>
    );
  }
);