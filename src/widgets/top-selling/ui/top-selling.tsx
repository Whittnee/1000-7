import { ClothesCard, selectClothesByPopular } from "@/entities/clothes";
import { useSelector } from "@/entities/store";
import { TSlicedClothes } from "@/shared/types/clothes";
import { FC, useEffect, useState } from "react";
import styles from "./top-selling.module.scss"

export const TopSelling: FC = () => {
  const clothes = useSelector(selectClothesByPopular);
  const [visibleClothes, setVisibleClothes] = useState<TSlicedClothes[]>([]);

  useEffect(() => {
    setVisibleClothes(clothes.slice(0, 5))
  }, [clothes])
  return (
    <section className={styles.topSelling}>
      <h2 className={styles.h2}>Top Selling</h2>
      <ul className={styles.clothes}>
        {visibleClothes.map((item) => (
          <ClothesCard key={item.id} {...item} />
        ))}
      </ul>
    </section>
  );
};