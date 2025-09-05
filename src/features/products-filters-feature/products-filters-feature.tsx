import { ColorSelector } from "@/shared/ui/color-selector";
import { PriceRange } from "@/shared/ui/price-range";
import { Separator } from "@/shared/ui/separator";
import { SizeSelector } from "@/shared/ui/size-selector";
import { Switcher } from "@/shared/ui/switcher";
import clsx from "clsx";
import { FC, memo } from "react";
import { RxCaretUp, RxMixerVertical } from "react-icons/rx";
import styles from "./styles.module.scss";
import { TProductsFiltersFeatureProps } from "@/features/products-filters-feature/types";
import { Button } from "@/shared/ui/button";

export const ProductsFiltersFeature: FC<TProductsFiltersFeatureProps> = memo(
  ({
    size,
    className,
    selectedSize,
    selectedColor,
    selectedCategory,
    prices,
    setPrices,
    setSelectedSize,
    setSelectedColor,
    setSelectedCategory,
    handleFilter,
    ...otherProps
  }) => {
    const sizes = ["Small", "Medium", "Large", "X-Large"];
    const categories = [
      "T-Shirt",
      "Sweatshirt",
      "Jacket",
      "Pajamas",
      "Hoodie",
      "Longsleeve",
    ];
    const colors = [
      "Black",
      "White",
      "Grey",
      "Bisque",
      "Blue",
      "Slateblue",
      "Pink",
      "Aquamarine",
      "LightCoral",
      "Orange",
      "SpringGreen",
      "LightPink",
      "Goldenrod",
      "Tomato",
      "Azure",
    ];

    return (
      <div
        className={clsx(styles.productsFiltersFeature, styles[size], className)}
        {...otherProps}
      >
        <div className={styles.property}>
          <span className={styles.span}>Filters</span>
          <RxMixerVertical className={styles.icon} />
        </div>
        <Separator />
        <div className={styles.actions}>
          <div className={styles.property}>
            <span className={styles.span}>Category</span>
            <RxCaretUp className={styles.icon} />
          </div>
          <ul className={clsx(styles.categories)}>
            {categories.map((category) => (
              <li key={category}>
                <span>{category}</span>
                <Switcher
                  category={category}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
              </li>
            ))}
          </ul>
        </div>
        <Separator />
        <div className={styles.actions}>
          <div className={styles.property}>
            <span className={styles.span}>Price</span>
            <RxCaretUp className={styles.icon} />
          </div>
          <div>
            <PriceRange
              min={0}
              max={200}
              values={prices}
              setValues={setPrices}
            />
          </div>
        </div>
        <Separator />
        <div className={styles.actions}>
          <div className={styles.property}>
            <span className={styles.span}>Colors</span>
            <RxCaretUp className={styles.icon} />
          </div>
          <ul>
            <ColorSelector
              colors={colors}
              selectedColor={selectedColor}
              size="small"
              showTitle={false}
              setSelectedColor={setSelectedColor}
            />
          </ul>
        </div>
        <Separator />
        <div className={styles.actions}>
          <div className={styles.property}>
            <span className={styles.span}>Sizes</span>
            <RxCaretUp className={styles.icon} />
          </div>
          <div>
            <SizeSelector
              sizes={sizes}
              selectedSize={selectedSize}
              size="small"
              showTitle={false}
              setSelectedSize={setSelectedSize}
            />
          </div>
        </div>
        <Button
          className={styles.applyButton}
          onClick={handleFilter}
          label='Apply Filter'
        />
      </div>
    );
  }
);
