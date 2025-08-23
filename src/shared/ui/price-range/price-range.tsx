import { TPriceRangeProps } from "@/shared/ui/price-range/types";
import { FC, memo } from "react";
import { getTrackBackground, Range } from "react-range";
import styles from "./styles.module.scss";

export const PriceRange: FC<TPriceRangeProps> = memo(({
  min,
  max,
  values = [],
  setValues,
}) => {
  return (
    <div className={styles.priceRange}>
      <Range
        step={5}
        min={min}
        max={max}
        values={values}
        onChange={(newValues) => setValues([...newValues])}
        renderTrack={({ props, children }) => (
          <div
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "35px",
              display: "flex",
              width: "100%",
              padding: "0 10px"
            }}
          >
            <div
              ref={props.ref}
              style={{ background: getTrackBackground({
                values,
                colors: ["#ccc", "var(--accent-color)", "#ccc"],
                min,
                max,
              }), alignSelf: "center" }}
              className={styles.track}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, index }) => (
          <div {...props} key={props.key} className={styles.thumb}>
            <div className={styles.value}>${values[index]}</div>
          </div>
        )}
      />
    </div>
  );
});
