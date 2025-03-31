import {
  ClothesCard,
  selectClothes,
  useClothesFilters,
} from "@/entities/clothes";
import { useSelector } from "@/entities/store";
import { FC } from "react";
import styles from "./catalog.module.scss"
import { ClothesFilterFeature } from "@/features/clothes";

export const Catalog: FC = () => {
  const clothes = useSelector(selectClothes);
  const {
    tempCategory,
    tempPrices,
    tempSize,
    tempColor,
    filteredClothes,
    setTempCategory,
    setTempPrices,
    setTempSize,
    setTempColor,
    handleFilter,
  } = useClothesFilters(clothes);
  return (
    <section className={styles.catalog}>
      <ClothesFilterFeature
        selectedCategory={tempCategory}
        prices={tempPrices}
        selectedSize={tempSize}
        selectedColor={tempColor}
        setSelectedCategory={setTempCategory}
        setSelectedColor={setTempColor}
        setSelectedSize={setTempSize}
        setPrices={setTempPrices}
        handleFilter={handleFilter}

      />
      <div className={styles.clothes}>
        <h2 className={styles.title}>Catalog</h2>
        <ul className={styles.ul}>
          {filteredClothes.map((item) => (
            <ClothesCard key={item.id} {...item} />
          ))}
        </ul>
      </div>
    </section>
  );
};
