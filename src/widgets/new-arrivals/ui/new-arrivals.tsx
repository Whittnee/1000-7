import { FC, useEffect, useState } from "react";
import styles from "./new-arrivals.module.scss";
import { useSelector } from "@/entities/store";
import { ClothesCard, selectClothesByNew } from "@/entities/clothes";
import { TSlicedClothes } from "@/shared/types/clothes";

export const NewArrivals: FC = () => {
  const clothes = useSelector(selectClothesByNew);
  const [visibleClothes, setVisibleClothes] = useState<TSlicedClothes[]>([]);

  useEffect(() => {
    setVisibleClothes(clothes.slice(0, 5))
  }, [clothes])
  return (
    <section className={styles.newArrivals}>
      <h2 className={styles.h2}>New Arrivals</h2>
      <ul className={styles.clothes}>
        {visibleClothes.map((item) => (
          <ClothesCard key={item.id} {...item} />
        ))}
      </ul>
    </section>
  );
};
