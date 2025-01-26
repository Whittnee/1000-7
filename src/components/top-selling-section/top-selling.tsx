import { FC, } from "react";
import styles from "./top-selling.module.scss";
import { ClothesCard } from "../clothes-card";
import { useSelector } from "../../services/store";
import { selectClothesByPopular } from "../../services/slices/clothesSlice";

export const TopSelling: FC = () => {
  const clothes = useSelector(selectClothesByPopular)
  return (
    <section className={styles.topSelling}>
      <h2 className={styles.h2}>Top Selling</h2>
      <ul className={styles.clothes}>
        {clothes.map(
          (item) => item.popular && <ClothesCard key={item.id} {...item} />
        )}
      </ul>
    </section>
  );
};
